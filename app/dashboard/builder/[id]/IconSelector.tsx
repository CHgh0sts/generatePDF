import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  File, FileText, Receipt, ShoppingCart, Package, Briefcase, 
  Calendar, Clock, DollarSign, Euro, CreditCard, Wallet,
  Users, User, Building, Home, Store, Factory,
  Mail, Phone, MapPin, Globe, Link2, Send,
  CheckCircle, XCircle, AlertCircle, Info, HelpCircle,
  Star, Heart, Bookmark, Flag, Tag, Award,
  TrendingUp, TrendingDown, BarChart, PieChart, Activity,
  Settings, Wrench, Hammer, Cog, Sliders,
  Search, Filter, Download, Upload, Save, Trash2,
  Edit, Copy, Clipboard, FileEdit, FilePlus, FileCheck,
  Folder, FolderOpen, Archive, Database, HardDrive,
  Image, Video, Music, Headphones, Camera, Film,
  ShoppingBag, Gift, Truck, Box, Boxes, Container,
  Zap, Flame, Droplet, Wind, Sun, Moon,
  Bell, MessageCircle, MessageSquare, AtSign, Hash,
  Lock, Unlock, Key, Shield, Eye, EyeOff,
  Plus, Minus, X, Check, ChevronRight, ChevronLeft,
  ArrowRight, ArrowLeft, ArrowUp, ArrowDown,
  Circle, Square, Triangle, Hexagon, Diamond,
  Layers, Layout, Grid, List, Menu, MoreHorizontal,
  Printer, Scan, Monitor, Smartphone, Tablet, Laptop,
  Wifi, Bluetooth, Cpu, Cloud, CloudDownload,
  Book, BookOpen, GraduationCap, Lightbulb, Target, Compass,
  Coffee, Pizza, Utensils, Wine,
  Car, Bike, Bus, Train, Plane, Rocket,
  TreePine, Flower, Leaf, Sprout,
  Smile, ThumbsUp, ThumbsDown,
  type LucideIcon
} from 'lucide-react';

// Liste complète des icônes disponibles
export const AVAILABLE_ICONS: { name: string; icon: LucideIcon; category: string }[] = [
  // Documents & Fichiers
  { name: 'File', icon: File, category: 'Documents' },
  { name: 'FileText', icon: FileText, category: 'Documents' },
  { name: 'Receipt', icon: Receipt, category: 'Documents' },
  { name: 'FileEdit', icon: FileEdit, category: 'Documents' },
  { name: 'FilePlus', icon: FilePlus, category: 'Documents' },
  { name: 'FileCheck', icon: FileCheck, category: 'Documents' },
  { name: 'Folder', icon: Folder, category: 'Documents' },
  { name: 'FolderOpen', icon: FolderOpen, category: 'Documents' },
  { name: 'Archive', icon: Archive, category: 'Documents' },
  { name: 'Book', icon: Book, category: 'Documents' },
  { name: 'BookOpen', icon: BookOpen, category: 'Documents' },
  { name: 'Clipboard', icon: Clipboard, category: 'Documents' },
  
  // Commerce & Finance
  { name: 'ShoppingCart', icon: ShoppingCart, category: 'Commerce' },
  { name: 'ShoppingBag', icon: ShoppingBag, category: 'Commerce' },
  { name: 'DollarSign', icon: DollarSign, category: 'Commerce' },
  { name: 'Euro', icon: Euro, category: 'Commerce' },
  { name: 'CreditCard', icon: CreditCard, category: 'Commerce' },
  { name: 'Wallet', icon: Wallet, category: 'Commerce' },
  { name: 'Store', icon: Store, category: 'Commerce' },
  { name: 'Gift', icon: Gift, category: 'Commerce' },
  { name: 'Tag', icon: Tag, category: 'Commerce' },
  
  // Livraison & Logistique
  { name: 'Package', icon: Package, category: 'Logistique' },
  { name: 'Truck', icon: Truck, category: 'Logistique' },
  { name: 'Box', icon: Box, category: 'Logistique' },
  { name: 'Boxes', icon: Boxes, category: 'Logistique' },
  { name: 'Container', icon: Container, category: 'Logistique' },
  
  // Business & Travail
  { name: 'Briefcase', icon: Briefcase, category: 'Business' },
  { name: 'Building', icon: Building, category: 'Business' },
  { name: 'Factory', icon: Factory, category: 'Business' },
  { name: 'Users', icon: Users, category: 'Business' },
  { name: 'User', icon: User, category: 'Business' },
  { name: 'GraduationCap', icon: GraduationCap, category: 'Business' },
  
  // Communication
  { name: 'Mail', icon: Mail, category: 'Communication' },
  { name: 'Phone', icon: Phone, category: 'Communication' },
  { name: 'MessageCircle', icon: MessageCircle, category: 'Communication' },
  { name: 'MessageSquare', icon: MessageSquare, category: 'Communication' },
  { name: 'Send', icon: Send, category: 'Communication' },
  { name: 'Bell', icon: Bell, category: 'Communication' },
  { name: 'AtSign', icon: AtSign, category: 'Communication' },
  
  // Localisation
  { name: 'MapPin', icon: MapPin, category: 'Localisation' },
  { name: 'Globe', icon: Globe, category: 'Localisation' },
  { name: 'Home', icon: Home, category: 'Localisation' },
  { name: 'Compass', icon: Compass, category: 'Localisation' },
  
  // Temps & Calendrier
  { name: 'Calendar', icon: Calendar, category: 'Temps' },
  { name: 'Clock', icon: Clock, category: 'Temps' },
  
  // Statuts & Alertes
  { name: 'CheckCircle', icon: CheckCircle, category: 'Statuts' },
  { name: 'XCircle', icon: XCircle, category: 'Statuts' },
  { name: 'AlertCircle', icon: AlertCircle, category: 'Statuts' },
  { name: 'Info', icon: Info, category: 'Statuts' },
  { name: 'HelpCircle', icon: HelpCircle, category: 'Statuts' },
  
  // Favoris & Marqueurs
  { name: 'Star', icon: Star, category: 'Favoris' },
  { name: 'Heart', icon: Heart, category: 'Favoris' },
  { name: 'Bookmark', icon: Bookmark, category: 'Favoris' },
  { name: 'Flag', icon: Flag, category: 'Favoris' },
  { name: 'Award', icon: Award, category: 'Favoris' },
  
  // Graphiques & Données
  { name: 'TrendingUp', icon: TrendingUp, category: 'Graphiques' },
  { name: 'TrendingDown', icon: TrendingDown, category: 'Graphiques' },
  { name: 'BarChart', icon: BarChart, category: 'Graphiques' },
  { name: 'PieChart', icon: PieChart, category: 'Graphiques' },
  { name: 'Activity', icon: Activity, category: 'Graphiques' },
  
  // Outils & Paramètres
  { name: 'Settings', icon: Settings, category: 'Outils' },
  { name: 'Wrench', icon: Wrench, category: 'Outils' },
  { name: 'Hammer', icon: Hammer, category: 'Outils' },
  { name: 'Cog', icon: Cog, category: 'Outils' },
  { name: 'Sliders', icon: Sliders, category: 'Outils' },
  
  // Actions
  { name: 'Search', icon: Search, category: 'Actions' },
  { name: 'Filter', icon: Filter, category: 'Actions' },
  { name: 'Download', icon: Download, category: 'Actions' },
  { name: 'Upload', icon: Upload, category: 'Actions' },
  { name: 'Save', icon: Save, category: 'Actions' },
  { name: 'Trash2', icon: Trash2, category: 'Actions' },
  { name: 'Edit', icon: Edit, category: 'Actions' },
  { name: 'Copy', icon: Copy, category: 'Actions' },
  
  // Stockage & Base de données
  { name: 'Database', icon: Database, category: 'Stockage' },
  { name: 'HardDrive', icon: HardDrive, category: 'Stockage' },
  { name: 'Cloud', icon: Cloud, category: 'Stockage' },
  { name: 'CloudDownload', icon: CloudDownload, category: 'Stockage' },
  
  // Média
  { name: 'Image', icon: Image, category: 'Média' },
  { name: 'Video', icon: Video, category: 'Média' },
  { name: 'Music', icon: Music, category: 'Média' },
  { name: 'Headphones', icon: Headphones, category: 'Média' },
  { name: 'Camera', icon: Camera, category: 'Média' },
  { name: 'Film', icon: Film, category: 'Média' },
  
  // Énergie & Nature
  { name: 'Zap', icon: Zap, category: 'Énergie' },
  { name: 'Flame', icon: Flame, category: 'Énergie' },
  { name: 'Droplet', icon: Droplet, category: 'Énergie' },
  { name: 'Wind', icon: Wind, category: 'Énergie' },
  { name: 'Sun', icon: Sun, category: 'Énergie' },
  { name: 'Moon', icon: Moon, category: 'Énergie' },
  { name: 'TreePine', icon: TreePine, category: 'Nature' },
  { name: 'Flower', icon: Flower, category: 'Nature' },
  { name: 'Leaf', icon: Leaf, category: 'Nature' },
  { name: 'Sprout', icon: Sprout, category: 'Nature' },
  
  // Sécurité
  { name: 'Lock', icon: Lock, category: 'Sécurité' },
  { name: 'Unlock', icon: Unlock, category: 'Sécurité' },
  { name: 'Key', icon: Key, category: 'Sécurité' },
  { name: 'Shield', icon: Shield, category: 'Sécurité' },
  { name: 'Eye', icon: Eye, category: 'Sécurité' },
  { name: 'EyeOff', icon: EyeOff, category: 'Sécurité' },
  
  // Symboles basiques
  { name: 'Plus', icon: Plus, category: 'Symboles' },
  { name: 'Minus', icon: Minus, category: 'Symboles' },
  { name: 'X', icon: X, category: 'Symboles' },
  { name: 'Check', icon: Check, category: 'Symboles' },
  { name: 'Circle', icon: Circle, category: 'Symboles' },
  { name: 'Square', icon: Square, category: 'Symboles' },
  { name: 'Triangle', icon: Triangle, category: 'Symboles' },
  { name: 'Hexagon', icon: Hexagon, category: 'Symboles' },
  { name: 'Diamond', icon: Diamond, category: 'Symboles' },
  
  // Navigation & Flèches
  { name: 'ChevronRight', icon: ChevronRight, category: 'Navigation' },
  { name: 'ChevronLeft', icon: ChevronLeft, category: 'Navigation' },
  { name: 'ArrowRight', icon: ArrowRight, category: 'Navigation' },
  { name: 'ArrowLeft', icon: ArrowLeft, category: 'Navigation' },
  { name: 'ArrowUp', icon: ArrowUp, category: 'Navigation' },
  { name: 'ArrowDown', icon: ArrowDown, category: 'Navigation' },
  
  // Layout & Interface
  { name: 'Layers', icon: Layers, category: 'Interface' },
  { name: 'Layout', icon: Layout, category: 'Interface' },
  { name: 'Grid', icon: Grid, category: 'Interface' },
  { name: 'List', icon: List, category: 'Interface' },
  { name: 'Menu', icon: Menu, category: 'Interface' },
  { name: 'MoreHorizontal', icon: MoreHorizontal, category: 'Interface' },
  
  // Appareils
  { name: 'Printer', icon: Printer, category: 'Appareils' },
  { name: 'Scan', icon: Scan, category: 'Appareils' },
  { name: 'Monitor', icon: Monitor, category: 'Appareils' },
  { name: 'Smartphone', icon: Smartphone, category: 'Appareils' },
  { name: 'Tablet', icon: Tablet, category: 'Appareils' },
  { name: 'Laptop', icon: Laptop, category: 'Appareils' },
  
  // Connectivité
  { name: 'Wifi', icon: Wifi, category: 'Connectivité' },
  { name: 'Bluetooth', icon: Bluetooth, category: 'Connectivité' },
  { name: 'Link2', icon: Link2, category: 'Connectivité' },
  
  // Éducation & Idées
  { name: 'Lightbulb', icon: Lightbulb, category: 'Idées' },
  { name: 'Target', icon: Target, category: 'Idées' },
  
  // Nourriture & Boissons
  { name: 'Coffee', icon: Coffee, category: 'Nourriture' },
  { name: 'Pizza', icon: Pizza, category: 'Nourriture' },
  { name: 'Utensils', icon: Utensils, category: 'Nourriture' },
  { name: 'Wine', icon: Wine, category: 'Nourriture' },
  
  // Transport
  { name: 'Car', icon: Car, category: 'Transport' },
  { name: 'Bike', icon: Bike, category: 'Transport' },
  { name: 'Bus', icon: Bus, category: 'Transport' },
  { name: 'Train', icon: Train, category: 'Transport' },
  { name: 'Plane', icon: Plane, category: 'Transport' },
  { name: 'Rocket', icon: Rocket, category: 'Transport' },
  
  // Émotions
  { name: 'Smile', icon: Smile, category: 'Émotions' },
  { name: 'ThumbsUp', icon: ThumbsUp, category: 'Émotions' },
  { name: 'ThumbsDown', icon: ThumbsDown, category: 'Émotions' },
];

interface IconSelectorProps {
  selectedIcon: string;
  onSelectIcon: (iconName: string) => void;
}

export default function IconSelector({ selectedIcon, onSelectIcon }: IconSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ['Tous', ...Array.from(new Set(AVAILABLE_ICONS.map(i => i.category)))];

  const filteredIcons = AVAILABLE_ICONS.filter(icon => {
    const matchesSearch = icon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || icon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const SelectedIconComponent = AVAILABLE_ICONS.find(i => i.name === selectedIcon)?.icon || File;

  return (
    <div className="space-y-2">
      <label className="block text-xs font-medium text-gray-800">Icône du modèle</label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
          <SelectedIconComponent size={20} className="text-gray-700" />
        </div>
        <span className="text-sm text-gray-900 flex-1 text-left">{selectedIcon}</span>
        <ChevronRight size={16} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      {isOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 999999, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" style={{ zIndex: 1000000 }}>
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Choisir une icône</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher une icône..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="px-6 py-3 border-b border-gray-200 overflow-x-auto">
              <div className="flex gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Icons Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              {filteredIcons.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>Aucune icône trouvée</p>
                </div>
              ) : (
                <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-14 gap-2">
                  {filteredIcons.map(({ name, icon: Icon }) => (
                    <button
                      key={name}
                      onClick={() => {
                        onSelectIcon(name);
                        setIsOpen(false);
                      }}
                      className={`aspect-square flex items-center justify-center p-2 rounded-lg border-2 transition-all hover:scale-110 ${
                        selectedIcon === name
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50/30'
                      }`}
                      title={name}
                    >
                      <Icon size={20} className={selectedIcon === name ? 'text-blue-600' : 'text-gray-700'} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                {filteredIcons.length} icône{filteredIcons.length > 1 ? 's' : ''} disponible{filteredIcons.length > 1 ? 's' : ''}
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

