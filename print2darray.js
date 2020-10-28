var person = {
    firstname : 'subhadeep',
    lastname : 'roy choudhury'
};

function showfullname(){
    console.log(this.firstname +' ' + this.lastname);
}

var newfullname = showfullname.bind(person);

newfullname();