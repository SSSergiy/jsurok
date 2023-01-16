import columns from '../Objects/HTMLmarkup';

const TheaderHtml = () => {
  return (
    <>
      <thead>
        <tr>
          {columns.map(({ title }) => (
            <th style={{ border: '1px solid #1677FF' ,padding:"10px" }}>{title}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};
export default TheaderHtml;
