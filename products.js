var products = [
  {
    name: "Bashful Beige Bunny",
    img: "img/a.jpg",
    price: "22.50",
    descr: "This Bashful is the softest, floppiest critter you'll ever meet. With its silky smooth fur and sweet disposition, you're sure to be in for a lifetime of luxurious cuddles. Hold on tight to their squishy, bean-filled paws - ideal for little hands to grab."
  },
  {
    name: "Grumpy Cat Plush",
    img: "img/b.jpg",
    price: "16.99",
    descr: "This adorable 9-inch seated plush is a soft and realistic replica of Tardar Sauce, the ill-tempered meme sensation better known as Grumpy Cat. With over 5 million followers on Facebook, as well as major media appearances on television and in print, Grumpy Cat has been spreading her unique brand of cranky, cantankerous humor around the world since 2012. Our plush version features an accurate grouchy expression, as well as realistic details throughout the design."
  },
  {
    name: "Pokemon Eevee 6-inch Plush",
    img: "img/c.jpg",
    price: "8.55",
    descr: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Zootopia Officer Judy Hopps",
    img: "img/d.jpg",
    price: "7.00",
    descr: "Officer Judy Hopps is a hop-timistic bunny who believes that any bunny can be anything. This cute, stylized small plush is 8.5-inch tall, ears and all! Her base is filled with beans so she can sit down. Judy Hopps is so soft and cuddly, it's hard to believe this cutie is one of the toughest police officers on the force! Collect all the small plush characters from Zootopia!."
  },
  {
    name: "TY Beanie Boos - Slush the Husky",
    img: "img/e.jpg",
    price: "7.80",
    descr: "Cuddle up with this adorable TY beanie baby, a sure favorite and great for that collector in your life. Slush the husky is silky soft & smiling your way. He's wagging his tail & asking you to come play."
  },
  {
    name: "My Little Pony - Rainbow Dash",
    img: "img/f.jpg",
    price: "7.10",
    descr: "Officially licensed My Little Pony characters. Super soft cuddly material & adorable features. This beautiful pony is ready to share adventures and fun with you! Each pony has their own personality - choose your favorite pony or collect them all!"
  },
  {
    name: "Stuffed Pusheen Plush Unicorn",
    img: "img/g.jpg",
    price: "14.38",
    descr: "GUND is proud to present Pusheen - a chubby gray tabby cat that loves cuddles, snacks, and dress-up. As a popular web comic, Pusheen brings brightness and chuckles to millions of followers in her rapidly growing online fan base. This 13-inch plush brings the bright and beautiful Pusheenicorn to life! Features a colorful rainbow mane and tail as well as a sparkly unicorn horn. Surface-washable for easy cleaning. Appropriate for ages one and up."
  },
  {
    name: "Gravity Falls Waddles Plush",
    img: "img/h.jpg",
    price: "5.32",
    descr: "Bacon ipsum dolor amet officia nostrud ut, pork loin ipsum meatball ut tongue adipisicing dolor fatback. In venison nulla, turducken anim officia aute landjaeger strip steak pancetta capicola. Esse minim short loin excepteur commodo anim qui ball tip filet mignon proident turducken ipsum rump. Enim rump sunt salami anim est ribeye biltong. Nulla flank turducken swine jerky deserunt fugiat, sirloin picanha pig shank sausage short ribs tenderloin ut. Shoulder frankfurter cupim jerky nisi, alcatra meatball pork belly in beef ribs. Ham pork loin in, kielbasa shoulder ad fatback fugiat minim."
  }
];

for (i = 0; i < products.length; i++) {
  productDiv.innerHTML += '<article class="card"><h5>' + products[i].name + '</h5><img src="' + products[i].img + '" alt="toy"><p>' + products[i].descr + '</p><p>' + products[i].price + '</p></article>'
}
