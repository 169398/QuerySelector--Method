//This is the  switch statement
//syntax


let b=2 +5;
switch(b){

    case 3:
    alert('Too small buddy');
    break;

    case 4:
        alert('Still too small');
        case 7:
            alert('That it big man');
            default:
                alert('No such values exist');


}


if(browser == 'edge'){
    alert('Bro! you are on edge');
}
else if(browser == 'chrome'
|| browser==
'firefox'
|| browser==
'Safari' 
|| browser=='Opera' )
{
    alert('Okay dude ! we support these browsers too');

}
else{
    alert('We hope this page is okay!');
}


let a =+prompt('a?','');
switch(a){
    case '0':
        alert('0')
        break;
        case '1':
            alert ('1');
            break;
            case '2':
                case '3':
                alert('2,3')
                break;
                default:
                    alert('number does not exist');

};