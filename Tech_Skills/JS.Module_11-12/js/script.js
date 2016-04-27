$(function () {

    /**  CAROUSEL PLUGIN  **/

  $('.carousel').jqueryCarousel({
  });




    /**  TEMPLATE  **/


  var html = $('#template').html();
  var myPage = {
      headerTitle: 'Бобровніков Денис Олександрович',
      headerLogo: 'img/logo.jpg',
      headerContent: 'Системний адміністратор (провайдінг)',
      contentTitle: 'Хочу вчити фронтенд, тому що',
      contentListItem_1: 'Мою роботу зможуть побачити сотні тисяч людей',
      contentListItem_2: 'Можна працювати з людьми з усього світу',
      contentListItem_3: 'Є можливість кожного дня дізнатись щось нове',
      contactTitle: 'Мій контактний телефон',
      phoneNumber: '+380503670312',
      contactSocialNetworkTitle: 'Мій профіль у фейсбук',
      contactSocialNetworkLink: 'https://www.facebook.com/profile.php?id=100007860781683',
      contactSocialNetworkLinkName: 'facebook.com',
      footerTitle: 'Мій фідбек',
      footerContent: 'Пропоную послуги мережевого адміністратора'
  };

  var content = tmpl(html, myPage);
  

  $('body').append(content);
  



});


