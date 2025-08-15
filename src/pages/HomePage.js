import { Carousel } from "antd";
import CategoryNavbar from "../components/CategoryNavbar";

function HomePage() {
  const slides = [
    {
      img: "https://static.euronews.com/articles/stories/07/86/95/86/1440x810_cmsv2_0f20f4c3-4b45-5ef3-92d2-9ececb800593-7869586.jpg",
      text: "Slide 1",
    },
    {
      img: "https://i.pinimg.com/originals/c6/7a/d8/c67ad8a0e57d9d87e4503a0205c2ac5e.jpg",
      text: "Slide 2",
    },
    {
      img: "https://img.businessoffashion.com/resizer/v2/T275FM3ICFDBBNOXPPEVXWX3WA.jpg?smart=true&auth=caac997dd12dd484a24a0624b68384f951df9e21e16802d4cdbaa0407adc807a&width=1200&height=630",
      text: "Slide 3",
    },
    {
      img: "https://jinfengapparel.com/wp-content/uploads/2025/01/Mannequins-Displaying-Trendy-Dresses.jpg",
      text: "Slide 4",
    },
  ];
  const contentStyle = {
    height: "560px",
    color: "black",
    lineHeight: "560px",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <CategoryNavbar />
      <Carousel autoplay arrows infinite={false}>
        {slides.map((slide) => (
          <div>
            <h3
              style={{
                ...contentStyle,
                backgroundImage: `url(${slide.img})`,
              }}
            >
              {slide.text}
            </h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HomePage;
