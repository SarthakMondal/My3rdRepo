//function to open the First Navigation Menu
function navOpen()
{
    var a = document.getElementsByClassName("navbar");
    var b = document.getElementsByClassName("menubar");
    a[0].style.marginLeft = "0";
    a[0].style.width = "auto";
    b[0].classList.add("opened");
    a[0].style.transition = "all 500ms";
    console.log("NavigationMenu Opened");

    
}

//function to close the First Navigation Menu
function navClose()
{
    var a = document.getElementsByClassName("navbar");
    var b = document.getElementsByClassName("menubar");
    a[0].style.marginLeft = "";
    a[0].style.width = "";
    b[0].classList.remove("opened");
    a[0].style.transition = "all 500ms";
    console.log("NavigationMenu Closed");
}


//function to check the position or status of the navigationbar
var con = false;
function checkPosition()
{
    if(!con)
    {
        navOpen();
        con = true;
    }

    else
    {
        navClose();
        con = false;
    }
}


function validateLoginForm()
{
    var a, b;
    a = document.getElementById("email").value;
    b = document.getElementById("pwd").value;

   
    if(a == "" && b == "")

    {
        document.getElementById("email").style.border = "solid 2px red";
        document.getElementById("pwd").style.border = "solid 2px red";
        document.getElementById("ermgs").innerHTML = "Please enter email and password to LogIN";
        return false;
    }

    else if(a == "")
    {
        document.getElementById("email").style.border = "solid 2px red";
        document.getElementById("ermgs").innerHTML = "Please enter Email to LogIN";
        return false;
    }

    else if(b == "")
    {
        document.getElementById("pwd").style.border = "solid 2px red";
        document.getElementById("ermgs").innerHTML = "Please enter Password to LogIN";
        return false;
    }

    

    else
    {
       
        return true;
    }

}


function validateSignupForm()
{
    console.log("checkSignup function called");
    var a,b,d,e,g,h;
    a = document.getElementById("fname").value;
    b = document.getElementById("email").value;
    d = document.getElementById("add").value;
    e = document.getElementById("pwd").value;
   
    g = e.length;
    h = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (a != "" && b != "" && d != "" && e != "" )
    {

        if (b != "")
        {
           if (b.match(h))
           {
               
           }

           else
           {
                document.getElementById("ermgssign").innerHTML = "Enter a valid Email ID";
                document.getElementById("email").style.border = "solid 2px red";
                return false;
           }
        }



        if (g<6)
        {
            document.getElementById("ermgssign").innerHTML = "Password Must be 6 digits";
            document.getElementById("pwd").style.border = "solid 2px red";
            return false;
        }

        return true;


    }

    else
    {
        document.getElementById("ermgssign").innerHTML = "All Fields are mandatory";
        return false;
    }


}


