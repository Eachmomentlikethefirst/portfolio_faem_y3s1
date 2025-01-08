import Navbar from '../Layout/Navbar.js';
function getContent() {
  const title = "Victor Marage"
  const text = `Victor Marage is a French 3D artist and audiovisual artist currently based in Prague. At 27 years old, he has conquered a unique space at the intersection of art and science. Using cutting-edge technology like Blender, TouchDesigner and 3D printing to create immersive works that explore profound topics such as space, gravity, time and the interconnectedness of the universe, her art transcends the traditional viewing experience. It invites the public to engage with a large-scale interactive art installation that combines sunlight, light and automated particle systems. Victor holds a bachelor's degree in Fine Arts and holds an associate's degree in web design. It combines a solid artistic foundation with a digital experience. His work was presented at Petrohradska Kolektiv in Prague, where he participated in the only school exhibition offering his first interactive and immersive exploration of art. Deeply influenced by artists like H.R. Giger and Tomas Saraceno, as well as the cinematic vision of Christopher Nolan, Victor's practice is driven by his belief in art as a bridge. Between beauty and science He challenges traditional artistic concepts. To create work that arouses admiration and curiosity. By encouraging the audience to actively participate. and create a physical relationship with their creations Victor's current interests lie in exploring the relationship between space, science, and art through interactive audiovisual projects. By combining advanced technology with a passion for creating moments of beauty and magic. He aims to engage viewers in an experience that is both intellectually and emotionally stimulating.`;
  return {title, text}
}
function Content() {
  const content = getContent();

  return (
    <div className="bg-slate-200 h-full w-full flex flex-col justify-center items-center">
        <p class="text-2xl my-3">{content.title}</p>
        <p class="mb-3 w-1/2 text-lg text-grey-900 md:text-xl dark:text-gray-400">{content.text}</p>
    </div>
  )
}
function Information() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
          <Navbar selected={1} />
          <Content />
      </div>
    </div>
  )
}
export default Information;
