import columns from '../Objects/HTMLmarkup';

const TheaderHtml = () => {
  return (
    <>
      <thead >
        <tr>
          <th  style={{border:"1px solid "}}>{columns[0].title}</th>
          <th style={{border:"1px solid "}}>{columns[1].title}</th>
          <th style={{border:"1px solid "}}>{columns[2].title}</th>
          <th style={{border:"1px solid "}}>{columns[3].title}</th>
        </tr>
      </thead>
    </>
  );
};
export default TheaderHtml;
