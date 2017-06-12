<!DOCTYPE html>
<html Lang="en">
<head>
    <meta name="viewport" content="width=device-width" />
    <title> Description </title>
    <link rel = "stylesheet" type = "text/css" href = "StyleSfarghiu.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
            $("button").click(function(){
                $("#div1").load("more_info.txt");
                $("#div1").css("fontSize", "26px")
            });
        });
    </script>
</head>
<body>

    <div class = "header">
        <img id="fii" src = "fii.png">
    </img>

    <div class="but">
        <a href="http://localhost:8181/Pac-Fac/Game.php"><button>Return to game</button>
        </a>
    </div>

    <div class="but">
        <a href="http://localhost:8181/Pac-Fac/raport.html"><button>Scholarly HTML report</button>
        </a>
    </div>
</div>

<div class="col-12 col-m-12">
    <div class = "pac-fac">
     Description

 </div>
 <div class = "description">
    <br><p> This website is part of a project that aims to bring the wonderful game of Pac-Man to the
    "Alexandru Ioan Cuza" University. </p>
    <p> This project was created by Vl&abreve;du&tcedil; Cojocariu, Sabina S&abreve;vescu, Andrei Arhip and Andrei Sfarghiu,
        under the guidance of their professor Ciprian Amariei. </p>
        <p> This project aims to recreate the legendary game of Pac-Man, but with a twist: the levels are
            inspired by the computer science building layout, the users will be able to connect using
            various social accounts, the power-ups are student-themed (cheat-sheets, smart-watches etc.),
            the ghosts are professors, and a whole lot more. </p>
            <p> We gladly present to you</p>
        </div>

        <div class = "urla">
            <p> Pac-Fac </p>
        </div>
        <img id="pacman" src = "pac-man.png">

<div id="div1">
</div>

<button onClick = "this.style.display='none';">More info</button>

</body>
</html>