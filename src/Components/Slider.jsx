import ImageSlider, { Slide } from "react-auto-image-slider";

function Slider() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      </Slide>
      <Slide>
        <img alt="img2" src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://images.unsplash.com/photo-1580287017488-706e4d7598a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://images.unsplash.com/photo-1605143185597-9fe1a8065fbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHx3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </Slide>
    </ImageSlider>
  );
}

export default Slider;