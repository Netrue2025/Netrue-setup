import CollectionManager from "../components/CollectionManager";
import { useContent } from "../../context/ContentContext";
import { collectionSchemas } from "../../services/contentSchemas";

function CollectionPage({ collectionKey, topContent }) {
  const schema = collectionSchemas[collectionKey];
  const content = useContent();
  const items = content[collectionKey];

  function handleSave(payload, editingItem) {
    if (editingItem) {
      content.updateRecord(collectionKey, editingItem.id, payload);
      return;
    }

    content.createRecord(collectionKey, payload);
  }

  function handleDelete(item) {
    content.deleteRecord(collectionKey, item.id);
  }

  return (
    <CollectionManager
      columns={schema.columns}
      description={schema.description}
      emptyDescription={schema.emptyDescription}
      emptyTitle={schema.emptyTitle}
      fields={schema.fields}
      items={items}
      onDelete={handleDelete}
      onSave={handleSave}
      title={schema.title}
      topContent={topContent}
    />
  );
}

export default CollectionPage;
