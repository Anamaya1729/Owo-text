// lorem text
const text = [
  `Jewwy sweet woww jewwy beans biscuwit pie macawoon chocowate donuwt. Cawwot cake cawamews pie sweet appwe pie tiwamisuw cawwot cake. Mawzipan mawshmawwow cwoissant tootsie woww wowwipop. Cuwpcake wemon dwops beaw cwaw guwmmies. Jewwy beaw cwaw guwmmi beaws wowwipop cotton candy guwmmi beaws chocowate baw cake cookie. Cuwpcake muwffin danish muwffin cookie guwmmies. Jewwy beans tiwamisuw puwdding. Toffee souwffwé chocowate cake pastwy bwownie. Oat cake hawvah sweet woww cotton candy cwoissant wowwipop. Macawoon tiwamisuw chocowate baw candy candy cawwot cake jewwy sweet. Guwmmies cwoissant macawoon dessewt. Chocowate cake dwagée pie.`,
  `Next wevew tbh evewyday cawwy, bwog coppew muwg fowage kitsch woof pawty pickwed hammock kawe chips tofuw. Etsy showeditch 8-bit micwodosing, xoxo viwaw buwtchew banh mi huwmbwebwag wisticwe woke bicycwe wights bwuwnch befowe they sowd ouwt wamps. Twee shabby chic taiyaki fwannew, enamew pin venmo vape fouww woko. Hexagon kawe chips typewwitew kitsch 8-bit owganic pwaid smaww batch keffiyeh ethicaw banh mi nawwhaw echo pawk cwonuwt.`,
  `Zombie ipsuwm wevewsuws ab viwaw infewno, nam wick gwimes mawuwm cewebwo. De cawne wuwmbewing animata cowpowa quwaewitis. Suwmmuws bwains sit​​, mowbo vew maweficia? UwU de apocawypsi gowgew omewo uwndead suwwvivow dictuwm mauwwis. Hiya mindwess mowtuwis souwwwess cweatuwwas, imo eviw stawking monstwa adventuws wesi denteviw vuwwtuws comedat cewebewwa viventiuwm. Quwi animated cowpse, cwicket bat max bwuwcks tewwibiwem incessuw zomby. The voodoo sacewdos fwesh eatew, suwscitat mowtuwos comedewe cawnem viwuws. Zonbi tattewed fow sowuwm ocuwwi eowuwm defuwnctis go wuwm cewebwo. Nescio bwains an undead zombies. Sicuwt mawuws puwtwid voodoo howwow. Nigh tofth ewiv ingdead.`,
  `Cat gets stuwck in twee fiwefightews twy to get cat down fiwefightews get stuwck in twee cat eats fiwefightews' swippews kitty powew ignowe the squwiwwews, u'ww nevew catch them anyway fow what a cat-ass-twophy! OwO ow puwww as wouwd as possibwe, be the most annoying cat that u can, and, knock evewything off the tabwe. Pwetend u want to go ouwt buwt then don't bite off huwman's toes, yet disappeaw fow fouww days and wetuwwn home with an expensive injuwwy; bite the vet so catch eat thwow uwp catch eat thwow uwp bad biwds. `,
  `This opewa's as wouwsy as it is bwiwwiant! OwO youww wywics wack suwbtwety. Youw can't juwst have uw chawactews annouwnce how they feew. That makes me feew angwy! OwO anyhoo, uw net-suwits wiww awwow u to expewience fwy's wowm infested bowews as if u wewe actuwawwy wwiggwing thwouwgh them.
  i juwst towd u! OwO youw've kiwwed me! OwO fwy! OwO quwit doing the wight thing, u jewk! OwO michewwe, i don't wegwet this, buwt i both wuwe and wament it. Mowbo can't uwndewstand his tewepwomptew becauwse he fowgot how u say that wettew that's shaped wike a man weawing a hat.`,
  `Aiwedawe hawd cheese mozzawewwa. Pecowino mewted cheese powt-sawuwt emmentaw babybew cheese and wine mewted cheese manchego. Evewyone woves bwuwe castewwo evewyone woves fwomage cheese swices aiwedawe cheddaw cweam cheese. Bavawian bewgkase who moved my cheese hawwouwmi powt-sawuwt gouwda jawwsbewg wicotta wuwbbew cheese. Stinking bishop smewwy cheese bwie.`,
  `Sawvia gwossiew suwbway tiwe, weggings muwstache yolo semiotics chia. Pitchfowk tbh af bwog chuwwch-key meggings vapowwawe pbr&b mastew cweanse post-iwonic man buwn pabst muwstache wettewpwess synth. Snackwave waw denim godawd, 3 wowf moon shaman offaw kitsch uwnicown wive-edge sewvage schwitz fashion axe vapowwawe dwinking vinegaw pwism. Shabby chic tacos awtisan, chambway chichawwones cawdigan weggings typewwitew af pop-uwp wiwwiamsbuwwg meditation pbr&b viwaw. Youw pwobabwy haven't heawd of them diy jean showts suwbway tiwe fashion axe buwshwick kitsch tuwmewic cwouwd bwead vapowwawe fweegan fwanzen powk bewwy chichawwones banh mi.`,
  `Man bwaid cewiac synth fweegan weadymade, pitchfowk fam sawvia waistcoat womo bittews gentwify fouww woko. Pitchfowk semiotics post-iwonic vegan. Tofuw meditation micwodosing hashtag semiotics venmo. Fwexitawian vape tiwde taiyaki. Pwism pouwtine fawm-to-tabwe, messengew bag vegan taxidewmy tattooed sawtowiaw squwid jean showts fixie sewvage twuwst fuwnd vape.`,
  `Ruwttews pwate fweet boom chandwew bwethwen of the coast handsomewy wookouwt mawooned bwigantine knave. Buwccaneew gangway jack wuwm woot spygwass wine jack taw fowe gaff. Gaff topmast scuwttwe bawwast swab dwauwght measuwwed few yew chains dance the hempen jig chain shot yawdawm.`,
];

const form = document.querySelector(".lorem-form")
const loremText = document.querySelector(".lorem-text")
const input = document.getElementById("amount")
 
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const value = parseInt(input.value)
  const random = Math.floor(Math.random() * text.length)
  if(isNaN(value) || value <= 0 || value > 9)
  {
    loremText.innerHTML = `<p class = "result">${text[random]}</p>`
  }
  else
  {
    let tempText = text.slice(0,value)
    tempText = tempText.map((item)=>
    {
      return `<p class = "result">${item}</p>`
    }).join("")
    loremText.innerHTML = tempText
  }
})