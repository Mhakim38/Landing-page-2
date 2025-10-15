'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomeText from '@/components/CustomeText';
import ServicesCard from '@/components/ui/ServicesCard';
import PortfolioCard from '@/components/ui/PortfolioCard';
import ReviewCard from '@/components/ui/ReviewCard';
import Blog from '@/components/ui/Blog';
import DualButtons from '@/components/ui/DualButtons';
import GenericSlider from '@/components/ui/GenericSlider';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import { MapPin, Phone, Clock, Utensils, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 z-10" />
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-apb-red/20 rounded-full blur-3xl z-10 animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-apb-gold/20 rounded-full blur-3xl z-10 animate-float" style={{ animationDelay: '1s' }} />
          
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop"
            alt="Ayam Penyet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-5xl">
              <div className="mb-6 animate-fadeIn">
                <span className="inline-block px-6 py-2 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                  Authentic Indonesian Cuisine
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fadeInUp leading-tight">
                The Best{' '}
                <span className="gradient-text block mt-2">
                  Ayam Penyet
                </span>
                <span className="block text-4xl md:text-5xl mt-4 text-apb-gold">
                  in Town
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-200 animate-fadeInUp max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
                Experience the authentic taste of Indonesia with our signature crispy smashed chicken, 
                served with our secret sambal recipe
              </p>
              <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <DualButtons
                  primaryText="View Our Menu"
                  secondaryText="Find Us"
                  primaryHref="#menu"
                  secondaryHref="#contact"
                  className="justify-center"
                />
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-apb-gold mb-2">15+</div>
                  <div className="text-sm md:text-base text-gray-300">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-apb-gold mb-2">10K+</div>
                  <div className="text-sm md:text-base text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-apb-gold mb-2">50+</div>
                  <div className="text-sm md:text-base text-gray-300">Menu Varieties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-white to-gray-50 flex items-center justify-center overflow-hidden drop-shadow-md">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-apb-gold rounded-full blur-3xl" />
        </div>
        <div className="relative flex items-center gap-4 drop-shadow-lg">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-apb-red to-apb-red" />
          <Utensils className="text-apb-red drop-shadow-md" size={24} />
          <div className="h-px w-32 bg-gradient-to-l from-transparent via-apb-red to-apb-red" />
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-apb-red rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-apb-gold rounded-full blur-3xl" />
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(45deg, #B91C1C 0px, #B91C1C 1px, transparent 1px, transparent 20px)',
               }} 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 drop-shadow-lg">
              <ScrollReveal animation="left">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-red-100 text-apb-red rounded-full text-sm font-semibold uppercase tracking-wider shadow-md">
                    Our Story
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="left" delay={1}>
                <CustomeText as="h2" className="text-5xl md:text-6xl font-bold text-apb-gray leading-tight drop-shadow-sm">
                  Welcome to{' '}
                  <span className="gradient-text block mt-2">
                    Ayam Penyet Best
                  </span>
                </CustomeText>
              </ScrollReveal>
              <ScrollReveal animation="left" delay={2}>
                <CustomeText as="p" className="text-gray-600 text-lg leading-relaxed">
                  Since our establishment, Ayam Penyet Best has been dedicated to serving authentic
                  Indonesian cuisine with a modern twist. Our signature dish, Ayam Penyet, is
                  prepared using traditional recipes passed down through generations.
                </CustomeText>
              </ScrollReveal>
              <ScrollReveal animation="left" delay={3}>
                <CustomeText as="p" className="text-gray-600 text-lg leading-relaxed">
                  We source only the freshest ingredients and combine them with our secret blend of
                  spices to create an unforgettable dining experience. Every dish is prepared with
                  love and attention to detail.
                </CustomeText>
              </ScrollReveal>
              
              <div className="grid grid-cols-3 gap-6 pt-8">
                <ScrollReveal animation="scale" delay={1}>
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-apb-red drop-shadow-md">
                    <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="text-apb-red" size={32} />
                    </div>
                    <h3 className="font-bold text-3xl text-apb-gray mb-1">15+</h3>
                    <p className="text-sm text-gray-600 font-medium">Years Experience</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="scale" delay={2}>
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-apb-gold drop-shadow-md">
                    <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="text-apb-gold" size={32} />
                    </div>
                    <h3 className="font-bold text-3xl text-apb-gray mb-1">10K+</h3>
                    <p className="text-sm text-gray-600 font-medium">Happy Customers</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="scale" delay={3}>
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-apb-red drop-shadow-md">
                    <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Utensils className="text-apb-red" size={32} />
                    </div>
                    <h3 className="font-bold text-3xl text-apb-gray mb-1">50+</h3>
                    <p className="text-sm text-gray-600 font-medium">Menu Items</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            <ScrollReveal animation="right">
              <div className="relative drop-shadow-2xl">
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-red-600 to-yellow-400 rounded-2xl shadow-xl" />
                <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                    alt="Restaurant Interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden drop-shadow-md">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-apb-red rounded-full blur-3xl" />
        </div>
        <div className="relative flex items-center gap-4 drop-shadow-lg">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-apb-gold to-apb-gold" />
          <Award className="text-apb-gold drop-shadow-md" size={24} />
          <div className="h-px w-32 bg-gradient-to-l from-transparent via-apb-gold to-apb-gold" />
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-gradient-to-br from-white via-yellow-50/30 to-white relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle, #FACC15 1px, transparent 1px)',
                 backgroundSize: '50px 50px'
               }} 
          />
        </div>
        {/* Floating shapes */}
        <div className="absolute top-40 right-20 w-72 h-72 bg-apb-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-apb-red/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <ScrollReveal animation="up">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-yellow-100 text-apb-gold rounded-full text-sm font-semibold uppercase tracking-wider shadow-md">
                  Our Menu
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="up" delay={1}>
              <CustomeText as="h2" className="text-5xl md:text-6xl font-bold text-apb-gray mb-6 drop-shadow-sm">
                Signature <span className="gradient-text">Dishes</span>
              </CustomeText>
            </ScrollReveal>
            <ScrollReveal animation="up" delay={2}>
              <CustomeText as="p" className="text-gray-600 text-xl max-w-2xl mx-auto">
                Discover our delicious selection of authentic Indonesian dishes, prepared fresh daily
              </CustomeText>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="up" delay={1}>
              <ServicesCard
                title="Ayam Penyet Original"
                description="Our signature crispy smashed fried chicken with sambal and fresh vegetables"
                image="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="up" delay={2}>
              <ServicesCard
                title="Ayam Penyet Spicy"
                description="Extra spicy version for those who love the heat with our special sambal"
                image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="up" delay={3}>
              <ServicesCard
                title="Ikan Penyet"
                description="Crispy smashed fried fish served with our famous sambal and rice"
                image="https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&h=600&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="up" delay={1}>
              <ServicesCard
                title="Tahu Tempe Penyet"
                description="Vegetarian option with crispy tofu and tempeh, equally delicious"
                image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="up" delay={2}>
              <ServicesCard
                title="Nasi Goreng Special"
                description="Indonesian fried rice cooked to perfection with fresh ingredients"
                image="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="up" delay={3}>
              <ServicesCard
                title="Es Teh Manis"
                description="Sweet iced tea to complement your meal perfectly"
                image="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-white to-apb-red/5 flex items-center justify-center overflow-hidden drop-shadow-md">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-apb-red rounded-full blur-3xl" />
        </div>
        <div className="relative flex items-center gap-4 drop-shadow-lg">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-apb-red to-apb-red" />
          <div className="flex items-center gap-2 drop-shadow-md">
            <div className="w-2 h-2 rounded-full bg-apb-red animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-apb-gold animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-apb-red animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="h-px w-32 bg-gradient-to-l from-transparent via-apb-red to-apb-red" />
        </div>
      </div>

      {/* Promotions Section */}
      <section id="promotions" className="py-24 bg-gradient-to-br from-red-50/50 via-white to-yellow-50/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(0deg, #B91C1C 0px, #B91C1C 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, #FACC15 0px, #FACC15 1px, transparent 1px, transparent 30px)',
               }} 
          />
        </div>
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-apb-red/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-apb-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal animation="up">
              <CustomeText as="h2" className="text-4xl font-bold text-apb-gray mb-4 drop-shadow-md">
                Special Promotions
              </CustomeText>
            </ScrollReveal>
            <ScrollReveal animation="up" delay={1}>
              <CustomeText as="p" className="text-gray-600 text-lg drop-shadow-sm">
                Don&apos;t miss out on our exclusive deals and limited-time offers
              </CustomeText>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="left" delay={1}>
              <PortfolioCard
                title="Family Package"
                subtitle="Save 20%"
                image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
                description="Perfect for family gatherings. Get 4 Ayam Penyet meals with drinks and sides."
              />
            </ScrollReveal>
            <ScrollReveal animation="up" delay={2}>
              <PortfolioCard
                title="Lunch Special"
                subtitle="Only $8.99"
                image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop"
                description="Available Monday to Friday, 11 AM - 2 PM. Ayam Penyet with rice and drink."
              />
            </ScrollReveal>
            <ScrollReveal animation="right" delay={3}>
              <PortfolioCard
                title="Student Discount"
                subtitle="15% Off"
                image="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop"
                description="Show your student ID and enjoy 15% off on all menu items."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Spacer (no gradient) */}
      <div className="h-12" />

      {/* Testimonials Section */}
  <section className="relative py-24 bg-neutral-950 overflow-hidden before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-12 before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),transparent)] before:pointer-events-none after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-12 after:bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent)] after:pointer-events-none">
        
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-400 text-white rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                Testimonials
              </span>
            </div>
            <CustomeText as="h2" animated className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Customers Say
            </CustomeText>
            <CustomeText as="p" animated className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real reviews from real people who love our authentic Indonesian cuisine
            </CustomeText>
          </div>

          <GenericSlider
            autoplay={true}
            delay={4000}
            pagination={true}
            className="pb-12"
          >
            {[
              {
                name: 'Sarah Johnson',
                rating: 5,
                review:
                  'The best Ayam Penyet I have ever tasted! The sambal is perfectly spicy and the chicken is incredibly crispy. Will definitely come back!',
                date: 'October 10, 2025',
              },
              {
                name: 'Michael Chen',
                rating: 5,
                review:
                  'Authentic Indonesian flavors that remind me of my travels. The service is excellent and the atmosphere is welcoming. Highly recommended!',
                date: 'October 12, 2025',
              },
              {
                name: 'Emma Davis',
                rating: 5,
                review:
                  'Amazing food at great prices! The lunch special is incredible value. The staff are friendly and the food always arrives hot and fresh.',
                date: 'October 14, 2025',
              },
            ].map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </GenericSlider>
        </div>
      </section>

      {/* Section Spacer (no gradient) */}
      <div className="h-12" />

      {/* Blog/Updates Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50/40 via-white to-gray-50 relative overflow-hidden">
        {/* Background hexagon pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FACC15' stroke-width='1'/%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }} 
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-20 w-56 h-56 bg-apb-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-20 w-64 h-64 bg-apb-red/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal animation="up">
              <CustomeText as="h2" className="text-4xl font-bold text-apb-gray mb-4 drop-shadow-md">
                Latest News & Updates
              </CustomeText>
            </ScrollReveal>
            <ScrollReveal animation="up" delay={1}>
              <CustomeText as="p" className="text-gray-600 text-lg drop-shadow-sm">
                Stay updated with our latest announcements and culinary insights
              </CustomeText>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="up" delay={1}>
              <Blog
                title="New Branch Opening Soon"
                excerpt="We're excited to announce our new location in downtown Jakarta opening next month!"
                image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                date="October 15, 2025"
                category="News"
              />
            </ScrollReveal>
            <ScrollReveal animation="up" delay={2}>
              <Blog
                title="The Secret Behind Our Sambal"
                excerpt="Discover the ingredients and techniques that make our sambal truly special and unforgettable."
                image="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&h=600&fit=crop"
                date="October 10, 2025"
                category="Recipe"
              />
            </ScrollReveal>
            <ScrollReveal animation="up" delay={3}>
              <Blog
                title="Customer Appreciation Day"
                excerpt="Join us for special discounts and giveaways to celebrate our amazing customers this weekend!"
                image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
                date="October 8, 2025"
                category="Events"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Spacer (no gradient) */}
      <div className="h-12" />

      {/* Contact/Find Us Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white via-red-50/30 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 2px 2px, #B91C1C 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }} 
          />
        </div>
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-apb-gold/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-apb-red/10 to-transparent rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <CustomeText as="h2" animated className="text-4xl font-bold text-apb-gray mb-4 drop-shadow-md">
              Find Us
            </CustomeText>
            <CustomeText as="p" animated className="text-gray-600 text-lg drop-shadow-sm">
              Visit any of our convenient locations
            </CustomeText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'APB Central Jakarta',
                address: '123 Jalan Sudirman, Central Jakarta',
                phone: '+62 812-3456-7890',
                hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
              },
              {
                name: 'APB South Jakarta',
                address: '456 Jalan Senayan, South Jakarta',
                phone: '+62 812-3456-7891',
                hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
              },
              {
                name: 'APB West Jakarta',
                address: '789 Jalan Taman Anggrek, West Jakarta',
                phone: '+62 812-3456-7892',
                hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
              },
            ].map((location, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-md shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 ease-in-out drop-shadow-lg"
              >
                <h3 className="text-xl font-bold text-apb-gray mb-4 drop-shadow-sm">{location.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-apb-red mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-apb-red mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-apb-red mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-red-600 to-yellow-400 text-white py-2 rounded-md hover:shadow-lg transition-all duration-300 ease-in-out font-semibold drop-shadow-md">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
