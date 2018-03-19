var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* multer how to for a single file, muliple files, and multiple objects of multiple files

install project, multer, cors

const multer = require("multer");
const uploads = multer({dest: 'public/uploads'});

router.post('/single', uploads.single('one'), (req,res)=>{
  res.json('http://localhost:3000/uploads'+req.file.filename);
})

router.post('/array', uploads.array('photos'), (req, res)=> {
  let arrayOfLinks = [];
  for (let file of req.files) {
    arrayOfLinks.push('http://localhost:3000/uploads'file.filename);
  }
  res.send(arrayOfLinks);
})

router.post('/multiple',
  uploads.fields([
    {name: 'profilePic}, maxCount: 1},
    {name: 'gallery', maxCount:12}
  ]),
  (req,res)=> {
    let links={};
    let galleryArray=[];
    links['profilePic'] = 'http://localhost:3000/uploads'+req.files.profilePic[0].filename;
    for(let file of req.files.gallery){
      links['gallery'] = galleryArray.push('http://localhost:3000/uploads'+file.filename);
    }
    links['gallery'] =  galeryArray;
    user.gallery = links.gallery;
    res.json(links);
  })


  IN ANGULAR

  create a service called fileservice
  import http, map, catch, observable

  constructor(provate http:Http){}

  singleFile(formData){
    this.http.post('http://localhost:3000/single', formData)
    .map(res.json())
    .catch(e=>Observable.throw(e));
  }
}




  app module:
  import http module
  import form module

  import fileservice

  draw our form in the html
  <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
    <input type="text" placeholder="email" name="email" ngModel/>
    <input multiple type="file" name="profilePic" (change)="manageFile($event)"/>
    <input type="submit">
  </form>



  In Component

  import file service and 
  constructor(private fileService: FileService)

  formData = new FormData();

  onSubmit(form){
    const keys = Object.keys(form.value);
    for (let key of keys){
      this.formData.append(key, form.value[key])
    }
    this.fileService.singleFile(this.formData)
    .subscribe(res.console.log(res));
  }

  manageFile(e){
    for (let file of e.target.files){
      this.formData.append(e.target.name, file);
    }
  }

  create in service 

  single
  multiple





*/