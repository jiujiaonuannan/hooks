import { Popover } from "antd";

function ListWithMore({ renderItem, data = [], max }) {
  const elements = data.map((item, index) => renderItem(item, index, data));
  const show = elements.slice(0, max);
  const hide = elements.slice(max);
  return (
    <span className="exp-10-list-with-more">
      {show}
      {hide.length > 0 && (
        <Popover content={<div style={{ maxWidth: 500 }}>{hide}</div>}>
          <span className="more-items-wrapper">
            and{" "}
            <span className="more-items-trigger"> {hide.length} more...</span>
          </span>
        </Popover>
      )}
    </span>
  );
}