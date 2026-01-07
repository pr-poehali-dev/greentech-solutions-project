import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }
    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: "Sun",
      title: "Солнечная энергия",
      description: "Проектирование и установка солнечных панелей для дома и бизнеса. Экономия до 70% на электроэнергии."
    },
    {
      icon: "Wind",
      title: "Ветровая энергия",
      description: "Консультации по внедрению ветрогенераторов. Автономные решения для загородных домов и предприятий."
    },
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description: "Аудит энергопотребления и разработка стратегии перехода на возобновляемые источники энергии."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Экологичное будущее начинается сегодня
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              GreenTech Solutions помогает бизнесу и частным лицам перейти на возобновляемые источники энергии. 
              Снижайте углеродный след и экономьте с умными экотехнологиями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                Получить консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/115f0d42-8ad2-498c-a12a-79dc38afa160/files/d7279f18-897c-47f5-bde1-c3ff9c34ec9f.jpg" 
              alt="Возобновляемая энергия" 
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексные решения для перехода на чистую энергию
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Оставьте заявку, и наш специалист проконсультирует вас по всем вопросам внедрения экологичных технологий.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Экологическая, д. 15</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@greentech-solutions.ru</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.617644,55.755819&z=16&l=map" 
                width="100%" 
                height="300" 
                frameBorder="0"
                className="w-full"
              ></iframe>
            </div>
          </div>

          <Card className="animate-scale-in shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Форма обратной связи
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">
                    Имя <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base">
                    Сообщение <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">GreenTech Solutions</h3>
          <p className="text-primary-foreground/80 mb-6">
            Экологичные технологии для устойчивого будущего
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
          <p className="mt-8 text-sm text-primary-foreground/60">
            © 2024 GreenTech Solutions. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
