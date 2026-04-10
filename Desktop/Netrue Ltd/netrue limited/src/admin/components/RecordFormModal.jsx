import { useEffect, useState } from "react";
import Button from "../../components/Button";

function toDisplayValue(field, value) {
  if (field.type === "list") {
    return Array.isArray(value) ? value.join("\n") : "";
  }

  return value ?? "";
}

function buildInitialState(fields, initialValues) {
  return fields.reduce((state, field) => {
    state[field.name] = toDisplayValue(field, initialValues?.[field.name]);
    return state;
  }, {});
}

function normalizeValue(field, value) {
  if (field.type === "list") {
    return `${value}`
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (field.type === "number") {
    return value === "" ? 0 : Number(value);
  }

  return value;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Unable to read file."));
    reader.readAsDataURL(file);
  });
}

function RecordFormModal({ fields, initialValues, isOpen, onClose, onSubmit, title }) {
  const [formState, setFormState] = useState(() => buildInitialState(fields, initialValues));

  useEffect(() => {
    if (isOpen) {
      setFormState(buildInitialState(fields, initialValues));
    }
  }, [fields, initialValues, isOpen]);

  if (!isOpen) {
    return null;
  }

  async function handleFileChange(field, event) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const dataUrl = await fileToDataUrl(file);
    setFormState((current) => ({
      ...current,
      [field.name]: dataUrl,
      ...(field.fileNameField ? { [field.fileNameField]: file.name } : {})
    }));
  }

  function shouldRenderField(field) {
    if (!field.showWhen) {
      return true;
    }

    return formState[field.showWhen.field] === field.showWhen.equals;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const payload = fields.reduce((result, field) => {
      result[field.name] = normalizeValue(field, formState[field.name]);
      if (field.fileNameField && formState[field.fileNameField]) {
        result[field.fileNameField] = formState[field.fileNameField];
      }
      return result;
    }, {});

    if (payload.pricingModel === "Free") {
      payload.price = 0;
    }

    onSubmit(payload);
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 px-4 py-8">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Content manager</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-slate-950">{title}</h2>
          </div>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600" onClick={onClose} type="button">
            Close
          </button>
        </div>

        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          {fields.filter(shouldRenderField).map((field) => (
            <label className="grid gap-2 text-sm font-medium text-slate-700" key={field.name}>
              {field.label}
              {field.type === "textarea" || field.type === "list" ? (
                <textarea
                  className="min-h-28 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-green"
                  onChange={(event) => setFormState((current) => ({ ...current, [field.name]: event.target.value }))}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={field.rows || 4}
                  value={formState[field.name]}
                />
              ) : null}
              {field.type === "select" ? (
                <select
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-green"
                  onChange={(event) => setFormState((current) => ({ ...current, [field.name]: event.target.value }))}
                  required={field.required}
                  value={formState[field.name]}
                >
                  <option value="">Select {field.label.toLowerCase()}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : null}
              {field.type === "file" ? (
                <div className="grid gap-2">
                  <input
                    accept={field.accept}
                    className="rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-600"
                    onChange={(event) => handleFileChange(field, event)}
                    type="file"
                  />
                  {formState[field.fileNameField || field.name] ? (
                    <span className="text-xs text-slate-500">{formState[field.fileNameField || field.name]}</span>
                  ) : null}
                </div>
              ) : null}
              {["text", "url", "number", "date"].includes(field.type) ? (
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-green"
                  min={field.min}
                  onChange={(event) => setFormState((current) => ({ ...current, [field.name]: event.target.value }))}
                  placeholder={field.placeholder}
                  required={field.required}
                  type={field.type}
                  value={formState[field.name]}
                />
              ) : null}
            </label>
          ))}

          <div className="flex flex-wrap justify-end gap-3 pt-2">
            <Button onClick={onClose} type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecordFormModal;
