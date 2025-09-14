import { useState } from 'react';
import { Search, Menu, User, Heart, Play, Star } from 'lucide-react';

const GamePlatform = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">GameHub</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Início</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Jogos</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Categorias</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Lançamentos</a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-700 rounded-lg px-3 py-2 flex-1 max-w-md mx-8">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Buscar jogos..."
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Buscar jogos..."
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <a href="#" className="py-2 hover:text-blue-400 transition-colors">Início</a>
                <a href="#" className="py-2 hover:text-blue-400 transition-colors">Jogos</a>
                <a href="#" className="py-2 hover:text-blue-400 transition-colors">Categorias</a>
                <a href="#" className="py-2 hover:text-blue-400 transition-colors">Lançamentos</a>
                <div className="flex space-x-4 pt-2">
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                    <User className="w-5 h-5" />
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Cyberpunk 2077: 
                <span className="text-blue-400"> Phantom Liberty</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Experimente a expansão definitiva do aclamado RPG de mundo aberto. 
                Novas missões, personagens e uma história emocionante em Night City.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Jogar Agora
                </button>
                <button className="border border-gray-600 hover:border-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Ver Detalhes
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5db09af6-59b9-4709-825c-469cc7b03e9d.png" 
                alt="Cyberpunk 2077: Phantom Liberty expansion showing futuristic cityscape with neon lights and cyber-enhanced characters" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold">
                <Star className="w-4 h-4 inline mr-1" />
                4.8
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Jogos em Destaque</h2>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">
              Ver Todos →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Game Card 1 */}
            <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05c9833c-d05a-4508-ab21-2dd2adead84b.png" 
                alt="The Last of Us Part II action-adventure game with post-apocalyptic setting and emotional storytelling" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">The Last of Us Part II</h3>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400">Ação/Aventura</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7a8314e-e72d-4a09-8248-97fcb8fc56df.png" 
                alt="Elden Ring fantasy action RPG with expansive open world and challenging gameplay" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Elden Ring</h3>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400">RPG/Ação</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Card 3 */}
            <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7edacc24-3dc9-4d86-b8fa-f8f745113abf.png" 
                alt="God of War Ragnarök mythological action game with stunning visuals and epic combat" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">God of War Ragnarök</h3>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400">Ação/Aventura</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Card 4 */}
            <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5687a91-6adc-435f-9795-0c477347a032.png" 
                alt="Horizon Forbidden West open-world action RPG with robotic creatures and beautiful landscapes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Horizon Forbidden West</h3>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400">RPG/Ação</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Categorias Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-blue-500 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <h3 className="font-semibold">Ação</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-green-500 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <h3 className="font-semibold">RPG</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-purple-500 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <h3 className="font-semibold">Estratégia</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-red-500 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <h3 className="font-semibold">Tiro</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Jogos Populares</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                Todos
              </button>
              <button className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">
                Lançamentos
              </button>
              <button className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">
                Em Breve
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Popular Game 1 */}
            <div className="bg-gray-700 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-600 transition-colors">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5948063d-0ceb-4fa6-8427-fd80b5d0540b.png" 
                alt="Red Dead Redemption 2 western action-adventure game with detailed open world" 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">Red Dead Redemption 2</h3>
                <p className="text-gray-400 text-sm">Ação/Aventura</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm">4.9</span>
                </div>
              </div>
            </div>

            {/* Popular Game 2 */}
            <div className="bg-gray-700 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-600 transition-colors">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03a2dc52-5ad2-447f-87f5-977dc8927797.png" 
                alt="The Witcher 3: Wild Hunt fantasy RPG with deep storytelling and monster hunting" 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">The Witcher 3: Wild Hunt</h3>
                <p className="text-gray-400 text-sm">RPG/Ação</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm">4.8</span>
                </div>
              </div>
            </div>

            {/* Popular Game 3 */}
            <div className="bg-gray-700 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-600 transition-colors">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/374d74f3-13fc-4d76-902b-9668e1511623.png" 
                alt="Spider-Man: Miles Morales superhero action game with web-swinging through New York City" 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">Spider-Man: Miles Morales</h3>
                <p className="text-gray-400 text-sm">Ação/Aventura</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm">4.7</span>
                </div>
              </div>
            </div>

            {/* Popular Game 4 */}
            <div className="bg-gray-700 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-600 transition-colors">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ece8c93e-c47e-4e46-a746-5ff43510bd1f.png" 
                alt="Assassin's Creed Valhalla historical action RPG with Viking theme and exploration" 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">Assassin's Creed Valhalla</h3>
                <p className="text-gray-400 text-sm">RPG/Ação</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm">4.6</span>
                </div>
              </div>
            </div>

            {/* Popular Game 5 */}
            <div className="bg-gray-700 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-600 transition-colors">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a0b2227c-0b27-4af2-825a-f6680f2a22f7.png" 
                alt="Demon's Souls remake of classic action RPG with challenging combat and dark fantasy" 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">Demon's Souls</h3>
                <p className="text-gray-400 text-sm">RPG/Ação</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm">4.5</span>
                </div>
              </div>
            </div>

            {/* Popular Game 6 */}
            <div className="bg-gray-700 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-600 transition-colors">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49c4a717-a8ec-494f-90da-beb3c2712ef3.png" 
                alt="Ratchet & Clank: Rift Apart platform adventure game with dimensional hopping and creative weapons" 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">Ratchet & Clank: Rift Apart</h3>
                <p className="text-gray-400 text-sm">Aventura/Plataforma</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm">4.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">GameHub</span>
              </div>
              <p className="text-gray-400">
                A melhor plataforma para descobrir e jogar os melhores jogos do mercado.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jogos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Categorias</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Inscreva-se para receber novidades</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg outline-none w-full"
                />
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-colors">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 GameHub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamePlatform;