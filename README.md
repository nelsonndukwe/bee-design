# Bee deisgn

Previous Implementation

  // array of sections
  // const sections = [section1, section2, section3, section4, section5, section6];

  // // function to update the bee position
  // const moveBee = () => {
  //   const populatedSections = sections.map((sectionRef) => sectionRef.current);

  //   let currentSection = "section0"; // First section
  //   populatedSections.forEach((section) => {
  //     if (
  //       section &&
  //       window.scrollY >= section.offsetTop - window.innerHeight / 3
  //     ) {
  //       currentSection = section.id;
  //     }
  //   });

  //   let position_active = arrPositionModel.findIndex(
  //     (val) => val.section === currentSection
  //   );

  //   console.log({ position_active });

  //   if (position_active >= 0) {
  //     setPosition(arrPositionModel[position_active].coordinates);
  //   }
  // };

  // // useEffect hook to update the bee position on first render
  // useEffect(() => {
  //   moveBee();
  // });

  // // useEffect hook to update the bee position on scroll
  // useEffect(() => {
  //   window.addEventListener("scroll", moveBee);
  //   return () => {
  //     window.removeEventListener("scroll", moveBee);
  //   };
  // }, []);

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
