import React, { useState } from 'react';
import { Search, Menu, User, Heart, Play, Star, Bell, ShoppingCart } from 'lucide-react';

const GamePlatform = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 shadow-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Play className="w-7 h-7" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">GamePlay</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">Home</a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">Store</a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">Library</a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">Community</a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-800 rounded-xl px-4 py-3 flex-1 max-w-lg mx-8">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search games..."
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-3 hover:bg-gray-800 rounded-xl transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>
              <button className="p-3 hover:bg-gray-800 rounded-xl transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-3 hover:bg-gray-800 rounded-xl transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 hover:bg-gray-800 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <div className="flex items-center bg-gray-800 rounded-xl px-4 py-3">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search games..."
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="py-3 hover:text-blue-400 transition-colors font-medium">Home</a>
                <a href="#" className="py-3 hover:text-blue-400 transition-colors font-medium">Store</a>
                <a href="#" className="py-3 hover:text-blue-400 transition-colors font-medium">Library</a>
                <a href="#" className="py-3 hover:text-blue-400 transition-colors font-medium">Community</a>
                <div className="flex space-x-4 pt-4">
                  <button className="p-3 hover:bg-gray-800 rounded-xl transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="p-3 hover:bg-gray-800 rounded-xl transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                  <button className="p-3 hover:bg-gray-800 rounded-xl transition-colors">
                    <User className="w-5 h-5" />
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Discover Your Next 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Gaming Adventure</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 max-w-2xl">
                Explore thousands of games, connect with friends, and build your ultimate gaming collection.
              </p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition-colors text-lg">
                  Explore Games
                </button>
                <button className="border border-gray-600 hover:border-blue-400 text-white px-10 py-4 rounded-xl font-semibold transition-colors text-lg">
                  Join Community
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 h-48 flex items-end">
                    <div>
                      <h3 className="text-white font-bold text-lg">Action Games</h3>
                      <p className="text-blue-200">Thrilling adventures await</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-6 h-48 flex items-end">
                    <div>
                      <h3 className="text-white font-bold text-lg">RPG Games</h3>
                      <p className="text-green-200">Epic stories unfold</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 h-48 flex items-end">
                    <div>
                      <h3 className="text-white font-bold text-lg">Strategy Games</h3>
                      <p className="text-purple-200">Master your tactics</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-6 h-48 flex items-end">
                    <div>
                      <h3 className="text-white font-bold text-lg">Sports Games</h3>
                      <p className="text-red-200">Compete and win</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Games</h2>
            <button className="text-blue-400 hover:text-blue-300 transition-colors font-semibold text-lg">
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game Card 1 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cfc45ac2-d5d7-435e-b9db-bc37e1c18ea8.png" 
                  alt="Action game poster featuring intense combat scene with futuristic weapons and dramatic lighting" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  4.9
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Neon Revolution</h3>
                <p className="text-gray-400 mb-4">Fast-paced action in a cyberpunk world</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">$59.99</span>
                  <span className="text-green-400">Action</span>
                </div>
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac72a8d1-143b-4187-8e82-64108c088ad2.png" 
                  alt="RPG adventure game showcasing fantasy landscape with dragons and medieval castles" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  4.8
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Dragon's Legacy</h3>
                <p className="text-gray-400 mb-4">Epic fantasy RPG adventure</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">$69.99</span>
                  <span className="text-green-400">RPG</span>
                </div>
              </div>
            </div>

            {/* Game Card 3 */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d3ba44f2-af79-4bae-81ee-d92bdc63053d.png" 
                  alt="Racing game featuring high-speed sports cars on futuristic track with dynamic lighting" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  4.7
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Velocity Extreme</h3>
                <p className="text-gray-400 mb-4">High-speed racing competition</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">$49.99</span>
                  <span className="text-green-400">Racing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-700 p-8 rounded-2xl text-center hover:bg-blue-600 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-white transition-colors">
                <span className="text-white font-bold text-xl group-hover:text-blue-600">A</span>
              </div>
              <h3 className="font-semibold text-lg">Action</h3>
              <p className="text-gray-400 text-sm mt-2">1,234 games</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-2xl text-center hover:bg-green-600 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-white transition-colors">
                <span className="text-white font-bold text-xl group-hover:text-green-600">R</span>
              </div>
              <h3 className="font-semibold text-lg">RPG</h3>
              <p className="text-gray-400 text-sm mt-2">876 games</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-2xl text-center hover:bg-purple-600 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-white transition-colors">
                <span className="text-white font-bold text-xl group-hover:text-purple-600">S</span>
              </div>
              <h3 className="font-semibold text-lg">Strategy</h3>
              <p className="text-gray-400 text-sm mt-2">543 games</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-2xl text-center hover:bg-red-600 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-white transition-colors">
                <span className="text-white font-bold text-xl group-hover:text-red-600">F</span>
              </div>
              <h3 className="font-semibold text-lg">FPS</h3>
              <p className="text-gray-400 text-sm mt-2">765 games</p>
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
      <footer className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Play className="w-7 h-7" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">GamePlay</span>
              </div>
              <p className="text-gray-400 text-lg">
                Your ultimate gaming destination with thousands of titles and an active community.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-lg">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl mb-6">Newsletter</h3>
              <p className="text-gray-400 text-lg mb-6">Subscribe for latest updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-xl outline-none w-full text-lg"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-xl transition-colors text-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-lg">
            <p>© 2024 GamePlay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamePlatform;