class Blog{
    constructor(){
        console.log('Blog is stated!');
        const dataURL = "https://recoderr.tistory.com/";
        this.setInitData(dataURL);
    }
    setInitData(dataURL){
        this.getData(dataURL);
    }
    getData(dataURL){
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () =>{
            console.log(JSON.parse(oReq.responseText));
        })

        oReq.open('GET', dataURL);
        oReq.send();
    }
}

export default Blog;