const themes = {
  beginner: [
    {
      name: "Evdeki Eşyaları Tanıtma",
      sentences: [
        { en: "This is my chair.", tr: "Bu benim sandalyem." },
        { en: "The table is big.", tr: "Masa büyük." },
        { en: "I have a small bed.", tr: "Küçük bir yatağım var." },
        { en: "The lamp is on.", tr: "Lamba açık." },
        { en: "My sofa is red.", tr: "Koltuğum kırmızı." },
        { en: "The clock is loud.", tr: "Saat gürültülü." },
        { en: "I see a blue rug.", tr: "Mavi bir halı görüyorum." },
        { en: "The mirror is clean.", tr: "Ayna temiz." },
        { en: "This is a soft pillow.", tr: "Bu yumuşak bir yastık." },
        { en: "The shelf has books.", tr: "Rafda kitaplar var." }
      ]
    },
    {
      name: "Aylar, Günler ve Mevsimler",
      sentences: [
        { en: "Today is Monday.", tr: "Bugün Pazartesi." },
        { en: "I like sunny June.", tr: "Güneşli Haziran’ı severim." },
        { en: "Winter is very cold.", tr: "Kış çok soğuk." },
        { en: "Friday is my favorite.", tr: "Cuma en sevdiğim gün." },
        { en: "Spring has flowers.", tr: "Bahar çiçeklerle doludur." },
        { en: "July is hot here.", tr: "Temmuz burada sıcak." },
        { en: "Sunday is a fun day.", tr: "Pazar eğlenceli bir gün." },
        { en: "Autumn leaves fall.", tr: "Sonbahar yaprakları düşer." },
        { en: "March is rainy.", tr: "Mart yağmurludur." },
        { en: "Summer is warm.", tr: "Yaz sıcaktır." }
      ]
    },
    {
      name: "Günlük Hayat",
      sentences: [
        { en: "I wake up early.", tr: "Erken uyanırım." },
        { en: "I eat breakfast.", tr: "Kahvaltı yaparım." },
        { en: "I brush my teeth.", tr: "Dişlerimi fırçalarım." },
        { en: "I go to school.", tr: "Okula giderim." },
        { en: "I read a book.", tr: "Kitap okurum." },
        { en: "I watch TV.", tr: "Televizyon izlerim." },
        { en: "I play with friends.", tr: "Arkadaşlarla oynarım." },
        { en: "I eat dinner.", tr: "Akşam yemeği yerim." },
        { en: "I take a shower.", tr: "Duş alırım." },
        { en: "I go to bed.", tr: "Yatmaya giderim." }
      ]
    },
    {
      name: "İstemek ve Kullanmak Fiilleri",
      sentences: [
        { en: "I want a cookie.", tr: "Kurabiye istiyorum." },
        { en: "Can I use this pen?", tr: "Bu kalemi kullanabilir miyim?" },
        { en: "I need a drink.", tr: "İçecek lazım." },
        { en: "She wants a book.", tr: "O bir kitap istiyor." },
        { en: "He uses a phone.", tr: "O telefon kullanıyor." },
        { en: "I want to sleep.", tr: "Uyumak istiyorum." },
        { en: "Can you use this?", tr: "Bunu kullanabilir misiniz?" },
        { en: "I need help now.", tr: "Şimdi yardıma ihtiyacım var." },
        { en: "They want food.", tr: "Onlar yemek istiyor." },
        { en: "I use a laptop.", tr: "Dizüstü bilgisayar kullanıyorum." }
      ]
    },
    {
      name: "Restoranda Sipariş Verme",
      sentences: [
        { en: "I want a pizza.", tr: "Pizza istiyorum." },
        { en: "Can I have water?", tr: "Su alabilir miyim?" },
        { en: "I like this soup.", tr: "Bu çorbayı seviyorum." },
        { en: "Is the salad fresh?", tr: "Salata taze mi?" },
        { en: "I need a fork.", tr: "Çatala ihtiyacım var." },
        { en: "Can you make it quick?", tr: "Hızlı yapabilir misiniz?" },
        { en: "I want some bread.", tr: "Ekmek istiyorum." },
        { en: "Is this dish spicy?", tr: "Bu yemek baharatlı mı?" },
        { en: "I like cold drinks.", tr: "Soğuk içecekleri severim." },
        { en: "Can I pay now?", tr: "Şimdi ödeyebilir miyim?" }
      ]
    },
    {
      name: "Okul Arkadaşlarıyla Konuşma",
      sentences: [
        { en: "Hi, how are you?", tr: "Merhaba, nasılsın?" },
        { en: "Do you like school?", tr: "Okulu seviyor musun?" },
        { en: "What is your name?", tr: "Adın ne?" },
        { en: "I like math class.", tr: "Matematik dersini seviyorum." },
        { en: "Do you play games?", tr: "Oyun oynar mısın?" },
        { en: "My teacher is nice.", tr: "Öğretmenim iyi." },
        { en: "What time is lunch?", tr: "Öğle yemeği saat kaçta?" },
        { en: "I have a new book.", tr: "Yeni bir kitabım var." },
        { en: "Can we study together?", tr: "Birlikte çalışabilir miyiz?" },
        { en: "See you tomorrow!", tr: "Yarın görüşürüz!" }
      ]
    },
    {
      name: "Gelecekteki Planlar",
      sentences: [
        { en: "I will visit London.", tr: "Londra’yı ziyaret edeceğim." },
        { en: "She will learn English.", tr: "O İngilizce öğrenecek." },
        { en: "We will play soccer.", tr: "Futbol oynayacağız." },
        { en: "I will buy a car.", tr: "Araba alacağım." },
        { en: "He will read books.", tr: "O kitaplar okuyacak." },
        { en: "I will go to school.", tr: "Okula gideceğim." },
        { en: "They will sing songs.", tr: "Onlar şarkı söyleyecek." },
        { en: "I will eat healthy.", tr: "Sağlıklı yiyeceğim." },
        { en: "She will travel soon.", tr: "O yakında seyahat edecek." },
        { en: "We will have fun.", tr: "Eğleneceğiz." }
      ]
    },
    {
      name: "Turiste Yol Tarif Etme",
      sentences: [
        { en: "Go straight ahead.", tr: "Düz ilerle." },
        { en: "Turn left here.", tr: "Buradan sola dön." },
        { en: "The museum is close.", tr: "Müze yakın." },
        { en: "Walk for five minutes.", tr: "Beş dakika yürü." },
        { en: "Take the second right.", tr: "İkinci sağa dön." },
        { en: "It is near the park.", tr: "Parkın yakınında." },
        { en: "Follow this road.", tr: "Bu yolu takip et." },
        { en: "The hotel is there.", tr: "Otel orada." },
        { en: "You are very close.", tr: "Çok yakınsın." },
        { en: "Turn right now.", tr: "Şimdi sağa dön." }
      ]
    },
    {
      name: "Turistik Yerleri Tanıtma",
      sentences: [
        { en: "This is a big castle.", tr: "Bu büyük bir kale." },
        { en: "The beach is beautiful.", tr: "Plaj güzel." },
        { en: "This park is green.", tr: "Bu park yeşil." },
        { en: "The museum is old.", tr: "Müze eski." },
        { en: "This tower is tall.", tr: "Bu kule uzun." },
        { en: "The river is long.", tr: "Nehir uzun." },
        { en: "This church is quiet.", tr: "Bu kilise sessiz." },
        { en: "The city is lively.", tr: "Şehir canlı." },
        { en: "This bridge is famous.", tr: "Bu köprü ünlü." },
        { en: "The lake is calm.", tr: "Göl sakin." }
      ]
    },
    {
      name: "İş Görüşmesi",
      sentences: [
        { en: "My name is Alex.", tr: "Adım Alex." },
        { en: "I am a student.", tr: "Öğrenciyim." },
        { en: "I work very hard.", tr: "Çok çalışırım." },
        { en: "I like new challenges.", tr: "Yeni meydan okumaları severim." },
        { en: "I can start today.", tr: "Bugün başlayabilirim." },
        { en: "I speak English well.", tr: "İngilizceyi iyi konuşurum." },
        { en: "I have one year experience.", tr: "Bir yıl deneyimim var." },
        { en: "I am a team player.", tr: "Takım oyuncusuyum." },
        { en: "I learn very fast.", tr: "Çok hızlı öğrenirim." },
        { en: "Thank you for this.", tr: "Bunun için teşekkür ederim." }
      ]
    }
  ],
  intermediate: [
    {
      name: "Restoranda Sipariş Verme",
      sentences: [
        { en: "Could you recommend a dish?", tr: "Bir yemek önerebilir misiniz?" },
        { en: "I’d like the chicken pasta, please.", tr: "Lütfen tavuklu makarna istiyorum." },
        { en: "Is there any vegetarian option?", tr: "Vejetaryen bir seçenek var mı?" },
        { en: "Can you make it quick, please?", tr: "Lütfen hızlı yapabilir misiniz?" },
        { en: "I’m allergic to nuts.", tr: "Fıstığa alerjim var." },
        { en: "Could I have the bill?", tr: "Hesabı alabilir miyim?" },
        { en: "This dish is delicious!", tr: "Bu yemek çok lezzetli!" },
        { en: "Can I have some more water?", tr: "Biraz daha su alabilir miyim?" },
        { en: "Is the dessert included?", tr: "Tatlı fiyata dahil mi?" },
        { en: "Thank you for the great service.", tr: "Harika hizmet için teşekkür ederim." }
      ]
    },
    {
      name: "Turiste Yol Tarif Etme",
      sentences: [
        { en: "The station is two blocks away.", tr: "İstasyon iki blok ötede." },
        { en: "Take the first left after the bridge.", tr: "Köprüden sonra ilk sola dön." },
        { en: "You’ll see a big statue on your right.", tr: "Sağında büyük bir heykel göreceksin." },
        { en: "It’s about a ten-minute walk.", tr: "Yaklaşık on dakikalık bir yürüyüş." },
        { en: "Follow the signs to the museum.", tr: "Müzeye giden tabelaları takip et." },
        { en: "The park is just across the street.", tr: "Park tam karşı caddede." },
        { en: "You can’t miss the tall building.", tr: "Yüksek binayı kaçıramazsın." },
        { en: "Turn right at the traffic lights.", tr: "Trafik ışıklarında sağa dön." },
        { en: "It’s next to the coffee shop.", tr: "Kafe’nin yanında." },
        { en: "Let me show you on the map.", tr: "Haritada göstereyim." }
      ]
    },
    {
      name: "Günlük Hayat",
      sentences: [
        { en: "I usually wake up at seven.", tr: "Genelde yedide uyanırım." },
        { en: "I check my emails every morning.", tr: "Her sabah e-postalarımı kontrol ederim." },
        { en: "I go jogging in the park.", tr: "Parkta koşuya giderim." },
        { en: "I have a meeting at ten.", tr: "On’da bir toplantım var." },
        { en: "I cook dinner with my family.", tr: "Ailemle akşam yemeği hazırlarım." },
        { en: "I relax by watching a movie.", tr: "Film izleyerek dinlenirim." },
        { en: "I call my friends to catch up.", tr: "Arkadaşlarımı arayıp sohbet ederim." },
        { en: "I plan my day every evening.", tr: "Her akşam günümü planlarım." },
        { en: "I read a book before bed.", tr: "Yatmadan önce kitap okurum." },
        { en: "I set my alarm for tomorrow.", tr: "Yarın için alarmımı kurarım." }
      ]
    },
    {
      name: "Evdeki Eşyaları Tanıtma",
      sentences: [
        { en: "This is my new coffee table.", tr: "Bu benim yeni sehpam." },
        { en: "The curtains match the sofa.", tr: "Perdeler koltukla uyumlu." },
        { en: "I bought a wooden bookshelf.", tr: "Ahşap bir kitaplık aldım." },
        { en: "The kitchen is very modern.", tr: "Mutfak çok modern." },
        { en: "My TV is quite large.", tr: "Televizyonum oldukça büyük." },
        { en: "The rug is soft and cozy.", tr: "Halı yumuşak ve rahat." },
        { en: "I have a comfortable armchair.", tr: "Rahat bir koltuğum var." },
        { en: "The dining table seats six.", tr: "Yemek masası altı kişi alır." },
        { en: "My bed has a new mattress.", tr: "Yatağımda yeni bir yatak var." },
        { en: "The lamp creates warm light.", tr: "Lamba sıcak bir ışık yaratıyor." }
      ]
    },
    {
      name: "Gelecekteki Planlar",
      sentences: [
        { en: "I’m planning to study abroad.", tr: "Yurtdışında okumayı planlıyorum." },
        { en: "We’ll move to a bigger house.", tr: "Daha büyük bir eve taşınacağız." },
        { en: "I want to learn photography.", tr: "Fotoğrafçılık öğrenmek istiyorum." },
        { en: "She’ll start her own business.", tr: "O kendi işini kuracak." },
        { en: "I’m going to run a marathon.", tr: "Maraton koşacağım." },
        { en: "We’ll travel to Japan next year.", tr: "Gelecek yıl Japonya’ya seyahat edeceğiz." },
        { en: "I’ll take a cooking class.", tr: "Yemek pişirme dersi alacağım." },
        { en: "He’s saving for a new car.", tr: "O yeni bir araba için para biriktiriyor." },
        { en: "I want to volunteer abroad.", tr: "Yurtdışında gönüllü çalışmak istiyorum." },
        { en: "We’ll renovate our kitchen.", tr: "Mutfağımızı yenileyeceğiz." }
      ]
    },
    {
      name: "İstemek ve Kullanmak Fiilleri",
      sentences: [
        { en: "I’d like to try something new.", tr: "Yeni bir şey denemek istiyorum." },
        { en: "Can I borrow your laptop?", tr: "Dizüstü bilgisayarını ödünç alabilir miyim?" },
        { en: "I need some advice.", tr: "Biraz tavsiyeye ihtiyacım var." },
        { en: "She wants to join the club.", tr: "O kulübe katılmak istiyor." },
        { en: "He uses this app daily.", tr: "O bu uygulamayı günlük kullanıyor." },
        { en: "I’d prefer a quieter place.", tr: "Daha sakin bir yer tercih ederim." },
        { en: "Can we use your printer?", tr: "Yazıcınızı kullanabilir miyiz?" },
        { en: "I need to finish this task.", tr: "Bu görevi bitirmem gerekiyor." },
        { en: "They want a bigger office.", tr: "Onlar daha büyük bir ofis istiyor." },
        { en: "I use this tool for work.", tr: "Bu aracı iş için kullanıyorum." }
      ]
    },
    {
      name: "Aylar, Günler ve Mevsimler",
      sentences: [
        { en: "I love the colors of autumn.", tr: "Sonbaharın renklerini seviyorum." },
        { en: "January is cold and snowy.", tr: "Ocak soğuk ve karlıdır." },
        { en: "We have a holiday in May.", tr: "Mayıs’ta tatilimiz var." },
        { en: "Summer is perfect for swimming.", tr: "Yaz yüzme için mükemmel." },
        { en: "Monday mornings are busy.", tr: "Pazartesi sabahları yoğun." },
        { en: "Spring is my favorite season.", tr: "Bahar en sevdiğim mevsim." },
        { en: "December is full of celebrations.", tr: "Aralık kutlamalarla dolu." },
        { en: "I go hiking every Sunday.", tr: "Her pazar yürüyüşe giderim." },
        { en: "Winter evenings are cozy.", tr: "Kış akşamları sıcacık." },
        { en: "April showers bring flowers.", tr: "Nisan yağmurları çiçekler getirir." }
      ]
    },
    {
      name: "İş Görüşmesi",
      sentences: [
        { en: "I have three years of experience.", tr: "Üç yıllık deneyimim var." },
        { en: "I’m skilled in project management.", tr: "Proje yönetiminde yetkinim." },
        { en: "I work well under pressure.", tr: "Baskı altında iyi çalışırım." },
        { en: "My strength is communication.", tr: "Gücüm iletişim." },
        { en: "I’m looking for new challenges.", tr: "Yeni meydan okumalar arıyorum." },
        { en: "I can start next week.", tr: "Gelecek hafta başlayabilirim." },
        { en: "I’m familiar with this software.", tr: "Bu yazılıma aşinayım." },
        { en: "I enjoy working in teams.", tr: "Takımla çalışmaktan keyif alırım." },
        { en: "I’m a quick learner.", tr: "Hızlı öğrenirim." },
        { en: "Thank you for the opportunity.", tr: "Bu fırsat için teşekkür ederim." }
      ]
    },
    {
      name: "Turistik Yerleri Tanıtma",
      sentences: [
        { en: "This castle was built in 1200.", tr: "Bu kale 1200’de inşa edildi." },
        { en: "The museum has ancient artifacts.", tr: "Müzede antik eserler var." },
        { en: "This bridge is a famous landmark.", tr: "Bu köprü ünlü bir simge." },
        { en: "The park is great for picnics.", tr: "Park piknik için harika." },
        { en: "This church has beautiful windows.", tr: "Bu kilisenin güzel pencereleri var." },
        { en: "The city is known for its food.", tr: "Şehir yemekleriyle ünlü." },
        { en: "This tower offers a great view.", tr: "Bu kule harika bir manzara sunuyor." },
        { en: "The beach is perfect for surfing.", tr: "Plaj sörf için mükemmel." },
        { en: "This square is always lively.", tr: "Bu meydan her zaman canlı." },
        { en: "The lake is surrounded by mountains.", tr: "Göl dağlarla çevrili." }
      ]
    },
    {
      name: "Okul Arkadaşlarıyla Konuşma",
      sentences: [
        { en: "Have you finished the homework?", tr: "Ödevi bitirdin mi?" },
        { en: "I’m excited about the school trip.", tr: "Okul gezisi için heyecanlıyım." },
        { en: "What’s your favorite subject?", tr: "En sevdiğin ders ne?" },
        { en: "I need help with this project.", tr: "Bu projede yardıma ihtiyacım var." },
        { en: "Let’s hang out after school.", tr: "Okuldan sonra takılalım." },
        { en: "The exam was really tough.", tr: "Sınav çok zordu." },
        { en: "I joined the drama club.", tr: "Tiyatro kulübüne katıldım." },
        { en: "Do you want to study together?", tr: "Birlikte çalışmak ister misin?" },
        { en: "Our teacher explained it well.", tr: "Öğretmenimiz iyi anlattı." },
        { en: "See you at the cafeteria!", tr: "Kafeteryada görüşürüz!" }
      ]
    }
  ],
  advanced: [
    {
      name: "İş Görüşmesi",
      sentences: [
        { en: "I’ve led several successful projects.", tr: "Birkaç başarılı projeyi yönettim." },
        { en: "My expertise lies in data analysis.", tr: "Uzmanlığım veri analizinde." },
        { en: "I thrive in fast-paced environments.", tr: "Hızlı tempolu ortamlarda başarılıyım." },
        { en: "I’ve trained teams in new software.", tr: "Takımları yeni yazılımlarda eğittim." },
        { en: "I’m confident in public speaking.", tr: "Halka açık konuşmada kendime güveniyorum." },
        { en: "I’ve implemented cost-saving strategies.", tr: "Maliyet tasarrufu stratejileri uyguladım." },
        { en: "I adapt quickly to new challenges.", tr: "Yeni zorluklara hızlı uyum sağlarım." },
        { en: "My leadership style is collaborative.", tr: "Liderlik tarzım iş birliğine dayalı." },
        { en: "I’m proficient in multiple languages.", tr: "Birden fazla dilde yetkinim." },
        { en: "I look forward to contributing here.", tr: "Buraya katkıda bulunmayı sabırsızlıkla bekliyorum." }
      ]
    },
    {
      name: "Gelecekteki Planlar",
      sentences: [
        { en: "I aim to launch a startup soon.", tr: "Yakında bir girişim başlatmayı hedefliyorum." },
        { en: "I’ll pursue a master’s degree.", tr: "Yüksek lisans yapacağım." },
        { en: "We’re planning a global expedition.", tr: "Küresel bir keşif gezisi planlıyoruz." },
        { en: "I want to write a novel.", tr: "Roman yazmak istiyorum." },
        { en: "I’ll invest in sustainable projects.", tr: "Sürdürülebilir projelere yatırım yapacağım." },
        { en: "I’m exploring artificial intelligence.", tr: "Yapay zekayı araştırıyorum." },
        { en: "I’ll relocate to a new country.", tr: "Yeni bir ülkeye taşınacağım." },
        { en: "I want to mentor young professionals.", tr: "Genç profesyonellere mentorluk yapmak istiyorum." },
        { en: "I’ll advocate for environmental policies.", tr: "Çevresel politikalar için savunuculuk yapacağım." },
        { en: "I’m planning a career transition.", tr: "Kariyer değişikliği planlıyorum." }
      ]
    },
    {
      name: "Restoranda Sipariş Verme",
      sentences: [
        { en: "Could you pair a wine with this dish?", tr: "Bu yemekle bir şarap eşleştirebilir misiniz?" },
        { en: "I’d prefer the steak medium-rare.", tr: "Biftiği orta-az pişmiş tercih ederim." },
        { en: "Is this dish gluten-free?", tr: "Bu yemek glütensiz mi?" },
        { en: "Can you accommodate dietary restrictions?", tr: "Diyet kısıtlamalarına uyum sağlayabilir misiniz?" },
        { en: "I’d like to try the chef’s special.", tr: "Şefin özel yemeğini denemek istiyorum." },
        { en: "Could we have a table by the window?", tr: "Pencere kenarında bir masa alabilir miyiz?" },
        { en: "The ambiance here is fantastic.", tr: "Buradaki ambiyans harika." },
        { en: "Can you split the bill, please?", tr: "Hesabı bölebilir misiniz, lütfen?" },
        { en: "I’d like a non-alcoholic cocktail.", tr: "Alkolsüz bir kokteyl istiyorum." },
        { en: "This dessert is absolutely divine.", tr: "Bu tatlı kesinlikle muhteşem." }
      ]
    },
    {
      name: "Turistik Yerleri Tanıtma",
      sentences: [
        { en: "This cathedral is a Gothic masterpiece.", tr: "Bu katedral Gotik bir başyapıt." },
        { en: "The ruins date back to Roman times.", tr: "Harabeler Roma dönemine kadar uzanıyor." },
        { en: "This plaza hosts cultural festivals.", tr: "Bu meydan kültürel festivallere ev sahipliği yapıyor." },
        { en: "The fortress offers panoramic views.", tr: "Kale panoramik manzaralar sunuyor." },
        { en: "This gallery showcases modern art.", tr: "Bu galeri modern sanatı sergiliyor." },
        { en: "The canal is lined with historic buildings.", tr: "Kanal tarihi binalarla çevrili." },
        { en: "This monument commemorates a war hero.", tr: "Bu anıt bir savaş kahramanını anıyor." },
        { en: "The gardens are meticulously designed.", tr: "Bahçeler titizlikle tasarlanmış." },
        { en: "This district is vibrant at night.", tr: "Bu bölge geceleri canlı." },
        { en: "The harbor is a hub for trade.", tr: "Liman ticaretin merkezi." }
      ]
    },
    {
      name: "Turiste Yol Tarif Etme",
      sentences: [
        { en: "Head north until the roundabout.", tr: "Döner kavşağa kadar kuzeye ilerleyin." },
        { en: "The gallery is behind the cathedral.", tr: "Galeri katedralin arkasında." },
        { en: "Take the tram to the old town.", tr: "Eski şehre tramvayla gidin." },
        { en: "It’s a short walk from the station.", tr: "İstasyondan kısa bir yürüyüş mesafesinde." },
        { en: "Look for the clock tower as a landmark.", tr: "Saat kulesini bir işaret olarak arayın." },
        { en: "The theater is opposite the library.", tr: "Tiyatro kütüphanenin karşısında." },
        { en: "Cross the bridge to reach the market.", tr: "Pazara ulaşmak için köprüyü geçin." },
        { en: "The museum is tucked away in an alley.", tr: "Müze bir sokakta gizlenmiş." },
        { en: "Follow the river to the gardens.", tr: "Bahçelere ulaşmak için nehri takip edin." },
        { en: "You’ll pass a fountain on your left.", tr: "Solunuzda bir çeşme geçeceksiniz." }
      ]
    },
    {
      name: "Günlük Hayat",
      sentences: [
        { en: "I balance work and personal life.", tr: "İş ve kişisel hayatı dengeliyorum." },
        { en: "I attend webinars to stay updated.", tr: "Güncel kalmak için web seminerlerine katılıyorum." },
        { en: "I practice mindfulness every morning.", tr: "Her sabah farkındalık pratiği yapıyorum." },
        { en: "I commute by public transport.", tr: "Toplu taşıma ile işe gidiyorum." },
        { en: "I volunteer at a local charity.", tr: "Yerel bir hayır kurumunda gönüllüyüm." },
        { en: "I track my expenses carefully.", tr: "Harcamalarımı dikkatle takip ederim." },
        { en: "I enjoy hosting dinner parties.", tr: "Akşam yemeği partileri düzenlemekten keyif alıyorum." },
        { en: "I exercise to stay healthy.", tr: "Sağlıklı kalmak için egzersiz yapıyorum." },
        { en: "I follow international news daily.", tr: "Uluslararası haberleri günlük takip ederim." },
        { en: "I unwind with classical music.", tr: "Klasik müzikle rahatlarım." }
      ]
    },
    {
      name: "Okul Arkadaşlarıyla Konuşma",
      sentences: [
        { en: "I’m presenting my thesis next week.", tr: "Gelecek hafta tezimi sunuyorum." },
        { en: "The lecture was thought-provoking.", tr: "Ders düşündürücüydü." },
        { en: "I’m struggling with this assignment.", tr: "Bu ödevle zorlanıyorum." },
        { en: "Let’s collaborate on the group project.", tr: "Grup projesinde iş birliği yapalım." },
        { en: "The seminar was very insightful.", tr: "Seminer çok aydınlatıcıydı." },
        { en: "I’m applying for a scholarship.", tr: "Burs için başvuruyorum." },
        { en: "Have you joined any campus clubs?", tr: "Kampüs kulüplerine katıldın mı?" },
        { en: "The professor recommended a book.", tr: "Profesör bir kitap önerdi." },
        { en: "I’m preparing for the debate.", tr: "Münazaraya hazırlanıyorum." },
        { en: "Let’s grab coffee after class.", tr: "Dersten sonra kahve alalım." }
      ]
    },
    {
      name: "İstemek ve Kullanmak Fiilleri",
      sentences: [
        { en: "I’d like to negotiate the terms.", tr: "Şartları müzakere etmek istiyorum." },
        { en: "Can I access the database?", tr: "Veri tabanına erişebilir miyim?" },
        { en: "I need clarification on this issue.", tr: "Bu konuda açıklama lazım." },
        { en: "She wants to lead the project.", tr: "O projeyi yönetmek istiyor." },
        { en: "He uses advanced analytics tools.", tr: "O gelişmiş analitik araçlar kullanıyor." },
        { en: "I’d prefer to work remotely.", tr: "Uzaktan çalışmayı tercih ederim." },
        { en: "Can we utilize this resource?", tr: "Bu kaynağı kullanabilir miyiz?" },
        { en: "I need to review the contract.", tr: "Sözleşmeyi gözden geçirmem gerekiyor." },
        { en: "They want to streamline the process.", tr: "Onlar süreci kolaylaştırmak istiyor." },
        { en: "I use this platform for collaboration.", tr: "Bu platformu iş birliği için kullanıyorum." }
      ]
    },
    {
      name: "Evdeki Eşyaları Tanıtma",
      sentences: [
        { en: "This chandelier is an antique.", tr: "Bu avize antika." },
        { en: "The fireplace adds warmth.", tr: "Şömine sıcaklık katıyor." },
        { en: "My study is filled with books.", tr: "Çalışma odam kitaplarla dolu." },
        { en: "The patio is perfect for gatherings.", tr: "Veranda toplantılar için mükemmel." },
        { en: "This rug is handwoven.", tr: "Bu halı el dokuması." },
        { en: "The kitchen island is multifunctional.", tr: "Mutfak adası çok işlevli." },
        { en: "My home office is well-equipped.", tr: "Ev ofisim iyi donanımlı." },
        { en: "The balcony overlooks the city.", tr: "Balkon şehre bakıyor." },
        { en: "This cabinet stores fine china.", tr: "Bu dolap ince porselenleri saklıyor." },
        { en: "The guest room is cozy.", tr: "Misafir odası sıcacık." }
      ]
    },
    {
      name: "Aylar, Günler ve Mevsimler",
      sentences: [
        { en: "Autumn inspires my creativity.", tr: "Sonbahar yaratıcılığıma ilham veriyor." },
        { en: "February is short but chilly.", tr: "Şubat kısa ama soğuk." },
        { en: "I plan vacations in August.", tr: "Ağustos’ta tatil planlarım." },
        { en: "Winter tests my endurance.", tr: "Kış dayanıklılığımı sınar." },
        { en: "Tuesdays are my busiest days.", tr: "Salılar en yoğun günlerim." },
        { en: "Spring symbolizes new beginnings.", tr: "Bahar yeni başlangıçları simgeler." },
        { en: "October brings crisp air.", tr: "Ekim serin hava getirir." },
        { en: "I host parties every Saturday.", tr: "Her cumartesi parti düzenlerim." },
        { en: "Summer evenings are magical.", tr: "Yaz akşamları büyüleyici." },
        { en: "November is for reflection.", tr: "Kasım düşünmek içindir." }
      ]
    }
  ]
};

function selectLevel(level) {
  const themesDiv = document.getElementById('themes');
  const quizDiv = document.getElementById('quiz');
  themesDiv.classList.remove('hidden');
  quizDiv.classList.add('hidden');

  themesDiv.innerHTML = `<h2 class="text-2xl font-semibold text-gray-300 mb-6">${level.toUpperCase()} Temaları</h2>`;

  themes[level].forEach((theme, index) => {
    const themeData = typeof theme === 'string' ? { name: theme, sentences: [] } : theme;
    const button = document.createElement('button');
    button.className = 'theme-button';
    button.innerHTML = `<span>${index + 1}. ${themeData.name}</span><span>➔</span>`;
    button.onclick = () => startQuiz(themeData.name, themeData.sentences);
    themesDiv.appendChild(button);
  });
}

let currentSentenceIndex = 0;
let currentSentences = [];
let recognition = null;
let timerInterval = null;
let startTime = null;

function startQuiz(themeName, sentences) {
  if (!sentences.length) {
    alert('Bu tema için cümleler henüz eklenmedi.');
    return;
  }

  const themesDiv = document.getElementById('themes');
  const quizDiv = document.getElementById('quiz');
  themesDiv.classList.add('hidden');
  quizDiv.classList.remove('hidden');

  currentSentences = sentences;
  currentSentenceIndex = 0;
  showSentence(themeName);
}

function showSentence(themeName) {
  const quizDiv = document.getElementById('quiz');
  const sentence = currentSentences[currentSentenceIndex];

  quizDiv.innerHTML = `
    <h2 class="text-2xl font-semibold text-gray-300 mb-6">${themeName}</h2>
    <button onclick="selectLevel('${Object.keys(themes).find(key => themes[key].some(t => t.name === themeName))}')" class="mb-4 px-4 py-2 bg-gradient-to-r from-pink-300 to-rose-300 hover:from-pink-400 hover:to-rose-400 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">Geri Dön</button>
    <div class="sentence-card">
      ${sentence.en}
    </div>
    <button onclick="startRecognition('${sentence.en.replace(/'/g, "\\'")}')" class="px-8 py-4 bg-gradient-to-r from-pink-200 to-rose-200 hover:from-pink-300 hover:to-rose-300 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">🎙️ Söyle</button>
    <div id="feedback" class="feedback"></div>
    <div id="timer" class="timer mt-2 text-gray-300"></div>
    <div id="translation" class="translation hidden"></div>
    <div id="listen" class="listen-guide hidden"></div>
  `;
}

function playCorrectPronunciation(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  utterance.volume = 1.0;
  window.speechSynthesis.speak(utterance);
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[.,!?]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function levenshteinDistance(a, b) {
  const matrix = Array(b.length + 1).fill().map(() => Array(a.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }
  return matrix[b.length][a.length];
}

function isPronunciationClose(spoken, target) {
  const spokenNormalized = normalizeText(spoken);
  const targetNormalized = normalizeText(target);
  const distance = levenshteinDistance(spokenNormalized, targetNormalized);
  const maxLength = Math.max(spokenNormalized.length, targetNormalized.length);
  return distance <= Math.floor(maxLength * 0.2);
}

function startRecognition(targetSentence) {
  const feedbackDiv = document.getElementById('feedback');
  const translationDiv = document.getElementById('translation');
  const listenDiv = document.getElementById('listen');
  const timerDiv = document.getElementById('timer');

  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    feedbackDiv.innerHTML = '<span class="text-red-400">Tarayıcınız ses tanımayı desteklemiyor. Manuel olarak geçmek için tıklayın.</span>';
    feedbackDiv.innerHTML += `<button onclick="nextSentence()" class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg mt-2">Sonraki</button>`;
    return;
  }

  recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;

  startTime = Date.now();
  timerDiv.innerHTML = 'Süre: 0.0 saniye';
  timerInterval = setInterval(() => {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    timerDiv.innerHTML = `Süre: ${elapsed} saniye`;
  }, 100);

  recognition.onresult = (event) => {
    clearInterval(timerInterval);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    timerDiv.innerHTML = `Süre: ${elapsed} saniye`;

    let spokenText = '';
    for (let i = 0; i < event.results[0].length; i++) {
      spokenText = event.results[0][i].transcript;
      if (isPronunciationClose(spokenText, targetSentence)) {
        feedbackDiv.innerHTML = '<span class="text-green-400">Harika! Doğru telaffuz ettiniz.</span>';
        translationDiv.classList.remove('hidden');
        translationDiv.innerHTML = `Türkçe: ${currentSentences[currentSentenceIndex].tr}`;
        listenDiv.classList.add('hidden');
        recognition.stop();
        setTimeout(nextSentence, 4000);
        return;
      }
    }
    feedbackDiv.innerHTML = `<span class="text-red-400">Tekrar deneyin: "${event.results[0][0].transcript}" dediniz.</span>`;
    listenDiv.classList.remove('hidden');
    listenDiv.innerHTML = `<button class="listen-button" onclick="playCorrectPronunciation('${targetSentence.replace(/'/g, "\\'")}')">🔊 Dinle</button>`;
    recognition.stop();
  };

  recognition.onerror = (event) => {
    clearInterval(timerInterval);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    timerDiv.innerHTML = `Süre: ${elapsed} saniye`;
    
    let errorMessage = 'Ses tanıma hatası oluştu.';
    switch (event.error) {
      case 'no-speech':
        errorMessage = 'Konuşma algılanmadı, lütfen tekrar deneyin.';
        break;
      case 'audio-capture':
        errorMessage = 'Mikrofon erişimi sağlanamadı, lütfen mikrofonunuzu kontrol edin.';
        break;
      case 'not-allowed':
        errorMessage = 'Mikrofon erişimi reddedildi, tarayıcı ayarlarınızı kontrol edin.';
        break;
      case 'network':
        errorMessage = 'İnternet bağlantısı sorunu, lütfen bağlantınızı kontrol edin.';
        break;
      default:
        errorMessage = `Bilinmeyen hata: ${event.error}`;
    }
    feedbackDiv.innerHTML = `<span class="text-red-400">${errorMessage}</span>`;
    feedbackDiv.innerHTML += `<button onclick="startRecognition('${targetSentence.replace(/'/g, "\\'")}')" class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg mt-2">Tekrar Dene</button>`;
    feedbackDiv.innerHTML += `<button onclick="nextSentence()" class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg mt-2 ml-2">Sonraki</button>`;
    console.error('SpeechRecognition Hatası:', event.error);
    if (recognition) {
      recognition.stop();
    }
  };

  recognition.onend = () => {
    recognition = null;
  };

  feedbackDiv.innerHTML = '<span class="text-gray-300">Konuşmaya başlayın...</span>';
  recognition.start();
}

function nextSentence() {
  currentSentenceIndex++;
  if (currentSentenceIndex < currentSentences.length) {
    showSentence(currentSentences[0].name || themes.beginner.find(theme => theme.sentences === currentSentences)?.name || 'Tema');
  } else {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
      <h2 class="text-2xl font-semibold text-gray-300 mb-6">Tebrikler!</h2>
      <p class="text-lg">Bu temayı tamamladınız!</p>
      <button onclick="selectLevel('${Object.keys(themes).find(key => themes[key].some(t => t.sentences === currentSentences))}')" class="mt-4 px-4 py-2 bg-gradient-to-r from-pink-300 to-rose-300 hover:from-pink-400 hover:to-rose-400 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">Geri Dön</button>
    `;
  }
}