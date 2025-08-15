import { useState, useEffect } from "react";
import { Dropdown, Space } from "antd";

function CategoryNavbar() {
  const [category, setCategories] = useState([]);

  const categories = [
    {
      name: "New In",
      items: [
        {
          key: "1",
          label: (
            <a href="https://www.fashionnova.com/collections/everyday-dresses?division=women">
              Top
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a href="https://www.fashionnova.com/collections/dresses?division=women">
              Bottom
            </a>
          ),
        },
        { key: "3", label: <a href="">Accessories</a> },
      ],
    },
    {
      name: "Top",
      items: [
        { key: "1", label: <a href="">Top</a> },
        { key: "2", label: <a href="">Top</a> },
        { key: "3", label: <a href="">Top</a> },
        { key: "4", label: <a href="">Top</a> },
      ],
    },
    {
      name: "Bottom",
      items: [
        { key: "1", label: <a href="">Pants</a> },
        { key: "2", label: <a href="">Skirt</a> },
        { key: "3", label: <a href="">Jeans</a> },
        { key: "4", label: <a href="">Test</a> },
      ],
    },
    {
      name: "Accessories",
      items: [
        { key: "1", label: <a href="">2025 Fall</a> },
        { key: "2", label: <a href="">On Sale</a> },
        { key: "3", label: <a href="">Necklace</a> },
        { key: "4", label: <a href="">Rings</a> },
      ],
    },
  ];
  // Use when connect to database
  //   useEffect(() => {
  //     fetch("")
  //       .then((res) => res.json())
  //       .then((data) => setCategories(data))
  //       .catch((err) => console.error(err));
  //   }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {categories.map((category) => (
        <div key={category.name} style={{ marginRight: "30px" }}>
          <Dropdown menu={{ items: category.items }} placement="bottom">
            <a onClick={(e) => e.preventDefault()}>
              <Space>{category.name}</Space>
            </a>
          </Dropdown>
        </div>
      ))}
    </div>
  );
}

export default CategoryNavbar;
