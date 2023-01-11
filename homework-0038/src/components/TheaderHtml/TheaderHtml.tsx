import columns from '../Objects/HTMLmarkup';
const ColumsTable = () => {
  columns.map(({ title }) => (
    <th style={{ border: '1px solid #1677FF', padding: '10px' }}>{title}</th>
  ));
};

const TheaderHtml = () => {
  return (
    <>
      <thead>
        <tr>{ColumsTable}</tr>
      </thead>
    </>
  );
};
export default TheaderHtml;
