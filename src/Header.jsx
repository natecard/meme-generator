export default function Header() {
  return (
    <nav className="flex flex-row items-center h-16 p-5 text-white bg-gradient-to-r from-purple-900 to-fuchsia-800">
      <img className="h-6" src="./src/Troll Face.png" alt="troll-face" />
      <h2 className="pl-2 mr-auto text-2xl">Meme Generator</h2>
      <h4 className="text-base py-7 pr-9">React Course - Project 3</h4>
    </nav>
  );
}
