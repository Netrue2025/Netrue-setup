import { Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import Button from "../../components/Button";
import EmptyState from "../../components/EmptyState";
import RecordFormModal from "./RecordFormModal";

function renderCell(column, item) {
  if (column.render) {
    return column.render(item);
  }

  return item[column.key];
}

function CollectionManager({ columns, description, emptyDescription, emptyTitle, fields, items, onDelete, onSave, title, topContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  function handleCreate() {
    setEditingItem(null);
    setIsOpen(true);
  }

  function handleEdit(item) {
    setEditingItem(item);
    setIsOpen(true);
  }

  function handleSubmit(payload) {
    onSave(payload, editingItem);
    setIsOpen(false);
    setEditingItem(null);
  }

  return (
    <>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Content collection</p>
            <h1 className="mt-3 font-display text-3xl font-semibold text-slate-950">{title}</h1>
            <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
          </div>
          <Button onClick={handleCreate} variant="primary">
            <Plus className="h-4 w-4" />
            New item
          </Button>
        </div>

        {topContent ? <div className="mt-8">{topContent}</div> : null}

        <div className="mt-8">
          {items.length ? (
            <>
              <div className="hidden overflow-hidden rounded-[1.5rem] border border-slate-200 lg:block">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      {columns.map((column) => (
                        <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" key={column.key}>
                          {column.label}
                        </th>
                      ))}
                      <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {items.map((item) => (
                      <tr key={item.id}>
                        {columns.map((column) => (
                          <td className="px-5 py-4 text-sm text-slate-700" key={column.key}>
                            {renderCell(column, item)}
                          </td>
                        ))}
                        <td className="px-5 py-4">
                          <div className="flex justify-end gap-2">
                            <Button className="rounded-2xl px-4 py-2" onClick={() => handleEdit(item)} variant="outline">
                              <Pencil className="h-4 w-4" />
                              Edit
                            </Button>
                            <Button className="rounded-2xl px-4 py-2" onClick={() => onDelete(item)} variant="primary">
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-4 lg:hidden">
                {items.map((item) => (
                  <article className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5" key={item.id}>
                    <div className="grid gap-3">
                      {columns.map((column) => (
                        <div className="flex items-start justify-between gap-4" key={column.key}>
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{column.label}</span>
                          <span className="max-w-[60%] text-right text-sm text-slate-700">{renderCell(column, item)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                      <Button className="flex-1 rounded-2xl px-4 py-2" onClick={() => handleEdit(item)} variant="outline">
                        Edit
                      </Button>
                      <Button className="flex-1 rounded-2xl px-4 py-2" onClick={() => onDelete(item)} variant="primary">
                        Delete
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <EmptyState description={emptyDescription} title={emptyTitle} />
          )}
        </div>
      </div>

      <RecordFormModal
        fields={fields}
        initialValues={editingItem}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setEditingItem(null);
        }}
        onSubmit={handleSubmit}
        title={editingItem ? `Edit ${title}` : `Create ${title}`}
      />
    </>
  );
}

export default CollectionManager;
