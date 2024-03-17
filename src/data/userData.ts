import User from "../Interfaces/User";

const userData: User[] = [
{id:"715f4181-ede4-4f3d-9968-fd7bd21d91af",name:"Lian Bowman",phone:"8019442212",email:"lbowman0@pagesperso-orange.fr",gender:"Female",isAdmin:false,admNo:"suco/01578/2372",roomId:"01HS772VVS1P4G6EQ2W8HPB63N"},
{id:"7aff2b73-d99d-48d7-a119-62bb4676f7ac",name:"Sig Gavrielli",phone:"3416104631",email:"sgavrielli1@smugmug.com",gender:"Female",isAdmin:false,admNo:"wcsy/87747/9261",roomId:"01HS772VVVNEC153Y98ZJ7Q5GJ"},
{id:"c0de4d12-f58c-48b2-b78f-8df73b4f979a",name:"Ruprecht Burstowe",phone:"9252407106",email:"rburstowe2@jugem.jp",gender:"Male",isAdmin:true,admNo:"eqqr/88884/4237",roomId:"01HS772VVX9ZW8CD41BTNS9KWV"},
{id:"7f93dd7e-1c5c-4ce1-95a6-ac6d17b4831c",name:"Giorgi Dunnan",phone:"6477094901",email:"gdunnan3@homestead.com",gender:"Male",isAdmin:true,admNo:"syxr/78305/0458",roomId:"01HS772VVYCNER9TQ78WCJ40X4"},
{id:"263ea421-afe2-439f-a593-ffb6cef0fc6f",name:"Gran MacGebenay",phone:"7111870746",email:"gmacgebenay4@bloglovin.com",gender:"Male",isAdmin:true,admNo:"vhof/61776/6179",roomId:"01HS772VW0TRQAC0JPE9XM7KSF"},
{id:"70cbafd1-b729-49c9-9db5-7c6a9e081d83",name:"Rawley Jewell",phone:"5132583189",email:"rjewell5@myspace.com",gender:"Male",isAdmin:true,admNo:"hbqk/05666/1883",roomId:"01HS772VW2EMF0J8N4QQR9G8TT"},
{id:"39cf9062-97a5-44e3-a391-863b114741f2",name:"Shelba Senn",phone:"2311164884",email:"ssenn6@php.net",gender:"Female",isAdmin:false,admNo:"iexh/57372/7892",roomId:"01HS772VW4JX9YF00FSEBDVKX8"},
{id:"7812505b-dd83-4fc5-9d41-63447e0c44f0",name:"Coriss La Padul",phone:"439587532",email:"cla7@networkadvertising.org",gender:"Female",isAdmin:true,admNo:"vzsg/02138/9673",roomId:"01HS772VW52M93VV5TXA76S0VD"},
{id:"bcc12298-f308-4b23-99f2-535893337985",name:"Lancelot Hesser",phone:"4584025901",email:"lhesser8@joomla.org",gender:"Male",isAdmin:true,admNo:"zvtn/02913/0432",roomId:"01HS772VW7CKGR1DFFW8GHK3QQ"},
{id:"e5ab28a5-16b4-486e-a1e5-99adb8576b20",name:"Merv Alvar",phone:"4061958224",email:"malvar9@addthis.com",gender:"Male",isAdmin:true,admNo:"ejtg/68430/8590",roomId:"01HS772VW9Z21RN39853T3S42M"},
{id:"683a861e-071e-4e40-9d39-925a0748a271",name:"Chilton Wright",phone:"1758471824",email:"cwrighta@blogger.com",gender:"Male",isAdmin:false,admNo:"quol/41803/7894",roomId:"01HS772VWAYSBP8NX6YTEDG6S2"},
{id:"c8ebef6c-2cc9-42f2-a257-f066510290b2",name:"Shelden Shuttle",phone:"1645470507",email:"sshuttleb@slideshare.net",gender:"Male",isAdmin:true,admNo:"yeug/70039/0927",roomId:"01HS772VWCXX0S8BHVS0YTXPTR"},
{id:"34608aa1-4f61-498a-adf9-759c31767874",name:"Rozele Tirkin",phone:"2191645950",email:"rtirkinc@cbslocal.com",gender:"Female",isAdmin:false,admNo:"isek/79172/3713",roomId:"01HS772VWE7J2AFB3T5YJGD44S"},
{id:"ad80c896-d779-4d1e-ac8e-9bad247e0e89",name:"Ozzy Lammerts",phone:"3848625213",email:"olammertsd@si.edu",gender:"Male",isAdmin:false,admNo:"uqrs/72069/1763",roomId:"01HS772VWFZD0JP96Q5HEZSWWZ"},
{id:"3741e6aa-0c2e-4719-b562-545306b2b879",name:"Ina Schenfisch",phone:"2259953310",email:"ischenfische@elpais.com",gender:"Female",isAdmin:true,admNo:"eddh/15803/8124",roomId:"01HS772VWG17FEFWM8WADY6HKJ"},
{id:"e97fb42c-ba4a-4abb-a5bd-3e33b4851f8a",name:"Gaby Oulner",phone:"1332920341",email:"goulnerf@dropbox.com",gender:"Male",isAdmin:true,admNo:"gqtf/38239/7782",roomId:"01HS772VWHQ13HD8ZMS7W2R8Y9"},
{id:"52a5cc65-1940-4b37-afe8-f03f1f6b4fc2",name:"Lenna Demangeon",phone:"5835843595",email:"ldemangeong@parallels.com",gender:"Female",isAdmin:false,admNo:"kxuk/95372/2927",roomId:"01HS772VWK1XW8DQ77DMF060RG"},
{id:"985dc9d6-6158-40bd-a9f3-ddcc70ccc572",name:"Edward Dally",phone:"5845171881",email:"edallyh@yolasite.com",gender:"Male",isAdmin:false,admNo:"sjvg/13603/2123",roomId:"01HS772VWMYKPV6H9P9K5MEVNC"},
{id:"d453b187-e403-498c-8ae5-79e3329c1c07",name:"Duncan Barge",phone:"6746661854",email:"dbargei@japanpost.jp",gender:"Male",isAdmin:false,admNo:"pitq/92498/1466",roomId:"01HS772VWN2YE9WFKTVGP3P0SD"},
{id:"817ce66c-a468-421b-824e-bf1fcc985222",name:"Pauline Gristwood",phone:"6572060068",email:"pgristwoodj@indiatimes.com",gender:"Female",isAdmin:true,admNo:"kupv/48986/1214",roomId:"01HS772VWQV2WXV7MD62EKG2WA"}
]


export default userData;