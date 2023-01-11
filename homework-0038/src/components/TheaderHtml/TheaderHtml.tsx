import columns from '../Objects/HTMLmarkup';

const TheaderHtml = () => {
  return (
    <>
      <thead>
        <tr>
          {columns.map(({ title }) => (
            <th style={{ border: '1px solid ' }}>{title}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};
export default TheaderHtml;
