const shayariList = [
    "Mood swings bhi usi pe dependent hain, jisko 'just a friend' bol rakha hai.",
    "Aaj kal log 'seen' kar ke feelings ignore kar dete hain, jaise wo spam ho.",
    "Tu reels ki trending nahi, dil ki favourite ho.",
    "Tera naam mention hota hai bina tag ke, har dua mein.",
    "Vibe match ho gaya toh baat chit ki zarurat hi nahi padti.",
    "Unfollow kiya tha dard kam karne ke liye, par har jagah tu hi recommend hota hai.",
    "Emotions ke emojis nahi hote, bas feel hote hain.",
    "Tere jaise log block list mein nahi, playlists mein hote hain.",
    "Tu chala gaya toh story dull ho gayi, highlight banne se pehle.",
    "Kash pyaar bhi whatsapp jaisa hota, delete for everyone ka option milta.",
    "Kahi baar dil dosti ke naam pe scam ho jaata hai.",
    "Self-care mein usse bhoolna bhi aata hai jo kabhi sab kuch tha.",
    "Tera reply na aana, mere mental health ka real issue hai.",
    "Dil to ab bhi uske 'last seen' pe atka hai.",
    "Uski aankhon mein future ka filter tha, tabhi toh sab kuch acha lagta tha.",
    "Pyaar tha ya illusion, pata tab chala jab usne ghost kar diya.",
    "Tum online the, main available... par milna kabhi possible hi nahi hua.",
    "Real feelings ko caption mein nahi fit kiya ja sakta.",
    "Kehna toh tha, par laga tum 'busy' ho feelings ignore karne mein.",
    "Jo dil mein tha, wo bio mein kabhi nahi likha.",
    "Uske replies slow the, par uska impact fast tha.",
  "Mujhe pyaar uski awaaz se nahi, uske 'typing...' se hua.",
  "Jo log 'busy' hote hain, woh kabhi real busy nahi hote.",
  "Tera mood dekh ke apna khud ka adjust kar leta hoon.",
  "Dil karta hai tujhe follow karu, par tum private hi rehti ho.",
  "Dard pe views nahi milte, isliye log feelings chhupake rakhte hain.",
  "Har baar tu 'ok' bolke baat khatam karti hai, aur main 'not ok' reh jaata hoon.",
  "Ab pyaar mein loyalty nahi, just low battery excuses hain.",
  "Tere saath jo filter laga hota tha, woh meri smile hoti thi.",
  "Pyar express nahi kiya, isliye 'best friend' ban gaya.",
  "Heartbreak ka solution reels nahi, real talk hota hai.",
  "She was not toxic, bas main zyada invested tha.",
  "Tu online thi, par hum connection se offline ho gaye.",
  "Unsend message mein bhi emotion chhupa hota hai.",
  "Main tera DP check karta hoon, tu kisi aur ki story mein busy hoti hai.",
  "Uske 'brb' ke baad aaj tak woh wapas nahi aayi.",
  "Jinmein feeling hoti hai, woh status update nahi karte.",
  "Dil ki baatein mic pe nahi, aankhon mein likhi hoti hain.",
  "Jo log chhod ke chale jaate hain, woh kabhi explain nahi karte.",
  "Tera attitude nahi, tera absence hurt karta hai.",
  "Tu meri favorite notification thi.",
  "Jo vibe tumse thi, wo Spotify tak nahi milti.",
  "Tumhara naam leke har raat motivation milta hai.",
  "Tumhare 'hmm' mein bhi hazaar feelings chhupi hoti hain.",
  "Kabhi kabhi 'seen' bhi breakup jaisa lagta hai.",
  "Tu kisi aur ki story mein thi, aur main tujhe poetry bana raha tha.",
  "Apne feelings delete nahi kiye, bas archive kar diye hain.",
  "Main tujhe har jagah dhoondta hoon, aur tu sab jagah offline hoti hai.",
  "Emojis se pyar nahi hota, but tere 😄 se ho gaya tha.",
  "Tu silence mein bhi loud thi mere liye.",
  "Tere bina vibe zero hai, chahe wifi full ho.",
  "Pyaar waale feel tu thi, baki sab toh version update lagte hain.",
  "Tum reply doge ya nahi, yeh suspense mere mental peace ka villain hai.",
  "Ham dard mein expert ho gaye, par tu expert ban gayi ignore mein.",
  "Tere 'take care' mein bhi ek doori thi.",
  "Pehle tu priority thi, ab sirf pop-up notification ban gayi hai.",
  "Dosti ka label mila, par feelings ka return nahi.",
  "Jo bhi aaya, sab ne seekha diya 'move on', koi nahi poochha 'kyu rona aaya'.",
  "Apne dil ko block nahi kar sakte, warna tujhe kab ka delete kar dete.",
  "Tera naam search bar mein type karte karte aadat ban gayi.",
  "Tum online the, par conversation mein offline.",
  "Log temporary hote hain, par unki yaadein permanent.",
  "Tere 'last seen' se bhi lagta tha tu busy mere khayalon mein hai.",
  "Sab kuch digital ho gaya, par feelings ab bhi manual hain.",
  "Main tujhmein itna ulajh gaya, ki khud se rishta toot gaya.",
  "Har notification pe lagta tha tu ho, par disappointment hi mila.",
  "Tere bina zindagi ki brightness low ho gayi.",
  "Na like chahiye, na share... bas tu read kar le.",
  "Heart react se zyada tujhe meri feelings real thi.",
  "Tu meri playlist ki pehli line thi, par gaana incomplete reh gaya.",
  "Aaj bhi tera naam password mein use karta hoon, yaadon se logout nahi hua.",
  "Tujhse pyar hua, aur privacy ka concept hi gaya.",
  "Tumhare saath time slow chalta tha, ab clock bhi boring lagti hai.",
  "Tera ek text, aur main overthinking ka CEO ban jaata hoon.",
  "Tu reply kare na kare, main shayari likhta raha.",
  "Tere naam ka ringtone tha kabhi, ab sirf silence hai.",
  "Wo typing indicator ab bhi hopeful bana deta hai.",
  "Na tune kuch kaha, na maine, bas dil ki deal cancel ho gayi.",
  "Tu story update karti rahi, main status delete karta gaya.",
  "Pyaar se zyada tu meri peace of mind thi.",
  "Tu mera comfort zone thi, par main tera option tha.",
  "Har baar 'brb' likhne wale log kabhi wapas nahi aate.",
  "Main tujhse pyaar nahi, tera attention chahta tha.",
  "Tum stories mein busy the, aur main apne thoughts mein.",
  "Pyaar express nahi kiya, isliye heartbreak silent mila.",
  "Uski ek 'hey' se mood set ho jaata tha, aur ek 'seen' se bigad jaata tha.",
  "Unfollow kiya, lekin yaadon ko logout nahi kar paaya.",
  "Tu meri screen time ka reason thi.",
  "Main tera reply nahi, tera attention chahta tha.",
  "Jab tu online hoti thi, tabhi zindagi interesting lagti thi.",
  "Aaj bhi wo notifications ka wait karta hoon jo kabhi nahi aate.",
  "Tera naam search bar mein likhne ki aadat ho gayi hai.",
  "Tumhe chhodna mushkil nahi tha, tumhe bhoolna hai impossible.",
  "Main usse real tha, par usko filter waale pasand the.",
  "Tere bina chat list khali lagti hai.",
  "Kisi aur ki story mein tu smile karti hai, aur main tujhe yaad karta hoon.",
  "Pehle tu feeling thi, ab ek lesson hai.",
  "Main teri voice note pe zyada overthink karta tha, message se kam.",
  "Aankhon ne pyaar kiya tha, par dimaag ne block kar diya.",
  "Mera status uske liye tha, par uska 'view' kabhi nahi aaya.",
  "Tu meri story ka hero tha, par tune dusri series join kar li.",
  "Jab tere 'typing...' ka pop-up aata tha, main future imagine karta tha.",
  "Tumne kaha busy ho, aur main dil samajh baitha 'bisy with someone else'.",
  "Wo 'mera apna' tha, par har baar kisi aur ke saath online aaya.",
  "Tujhse baat na ho toh notifications bekaar lagti hain.",
  "Tu reply kare na kare, main har waqt online feel karta hoon.",
  "Tere saath sab casual tha, par mere liye sab serious tha.",
  "Main teri DP nahi, teri priority banna chahta tha.",
  "Dil toota toh status update nahi kiya, shayari likh di.",
  "Tu meri playlist ka favourite tha, par tune channel hi change kar liya.",
  "Pyaar usse kiya jise status dekhna bhi important nahi lagta tha.",
  "Tu sirf friend thi, par mera har emotion exclusive tha.",
  "Vo 'goodnight' uski last message thi, aur meri neend ka the end.",
  "Pehle tu dil mein thi, ab Instagram pe bhi nahi.",
  "Main tera forever soch raha tha, tu temporary plan mein thi.",
  "Usne kaha 'let's be chill', aur main thand se bhar gaya.",
  "Tujhse door rehne ki acting kar raha hoon, par dil toh rehearsal mein hi atka hai.",
  "Vo scene chhod gayi, par script mere paas abhi bhi hai.",
  "Tum online ho ke bhi unavailable kaise ho sakti ho?",
  "Reply chhota tha, par damage infinite tha.",
  "Waqt sab kuch heal karta hai, par tera last message ab bhi unread hai.",
  "Tu meri reality thi, ab sirf memory ban gayi hai.",
  "Tumhare likes aur comments ne toh expectations badha di thi.",
  "Uska 'lol' itna fake tha jaise chat mein feelings ho hi nahi.",
  "Pyaar delete kiya, backup feelings ab bhi restore ho jaati hain.",
  "Tumhare saath tha toh self-respect ko bhi mute kar diya tha.",
  "Tere jaane ke baad toh silent mode life ka default ban gaya.",
  "Tumhe bhoolna meri productivity ka biggest goal hai.",
  "Main tujhe nahi dhoondh raha, bas har jagah mil jaati ho.",
  "Tum reply do ya na do, shayari toh ban hi jaati hai."
  ];
  
  function getRandomShayari() {
    const randomIndex = Math.floor(Math.random() * shayariList.length);
    return shayariList[randomIndex];
  }
  
  function showNewShayari() {
    const displayDiv = document.querySelector(".apt");
    if (displayDiv) {
      displayDiv.textContent = getRandomShayari();
    }
  }
  
  // Link the button after DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".clck");
    if (btn) {
      btn.addEventListener("click", showNewShayari);
    }
  });
  