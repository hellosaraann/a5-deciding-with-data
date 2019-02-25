//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author'    : 'Churchill',
      'year'      : 1940,
      'yearIsBCE' : false,
      'authorAge' : '66'
    },
    ghandiSpeech = {
      'author'    : 'Ghandi',
      'year'      : 1942,
      'yearIsBCE' : false,
      'authorAge' : '73'
    },
    demosthenesSpeech = {
      'author'    : 'Demosthenes',
      'year'      : 342,
      'yearIsBCE' : true,
      'authorAge' : '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

//greetings & setting of user names
var userName = window.prompt( "What is your name?" );

if ( typeof userName == "string" && userName !== "" ) {
  console.log( "Hi " + userName + "!" )
} else {
  console.log( "Okay, I'll just call you User" )
};

if ( userName == "" ) {
  var userName = "User";
};


//authorAge interactive elements

document.getElementById( 'BtnDonate' ).addEventListener( 'click', function() {

  var faveAuthor = window.prompt( "Which author here is your favorite: Churchill, Ghandi or Demosthenes?" );

  switch( faveAuthor ) {

    case "Churchill" :
      console.log( churchillSpeech.author + " was " + churchillSpeech.authorAge + " during this speech.");
      break;

      case "Ghandi" :
        console.log( ghandiSpeech.author + " was " + ghandiSpeech.authorAge + " during this speech." );
        break;

      case "Demosthenes" :
        console.log( demosthenesSpeech.author + " was " + demosthenesSpeech.authorAge + " during this speech." );
        break;

      default :
        console.log( "Incorrect entry. Please click donate to try again, and enter one name only:  Churchill, Ghandi or Demosthenes." );
        break;

    };

} );


//author buttons comparative script

document.getElementById( 'BtnChurchill' ).addEventListener( 'click', function() {

  console.log( "This speech was written by " + churchillSpeech.author + " in " + churchillSpeech.year + "." )

  if ( churchillSpeech.yearIsBCE == false ) {
    console.log( "This speech took place during the common era." )
  } else {
    console.log( "This speech took place before the common era." )
  };

  if ( churchillSpeech.yearIsBCE == true || (churchillSpeech.year < ghandiSpeech.year && churchillSpeech.year < demosthenesSpeech.year ))  {
    console.log( "This is the oldest speech on the page." )
  } else if ( churchillSpeech.year > ghandiSpeech.year && churchillSpeech.year > demosthenesSpeech.year ) {
    console.log( "This is the most recent speech on the page." )
  };

} );

document.getElementById( 'BtnGhandi' ).addEventListener( 'click', function() {

  console.log( "This speech was written by " + ghandiSpeech.author + " in " + ghandiSpeech.year + "." )

  if ( ghandiSpeech.yearIsBCE == false ) {
    console.log( "This speech took place during the common era." )
  } else {
    console.log( "This speech took place before the common era." )
  };

  if ( ghandiSpeech.yearIsBCE == true || (ghandiSpeech.year < churchillSpeech.year && ghandiSpeech.year < demosthenesSpeech.year ))  {
    console.log( "This is the oldest speech on the page." )
  } else if ( ghandiSpeech.year > churchillSpeech.year && ghandiSpeech.year > demosthenesSpeech.year ) {
    console.log( "This is the most recent speech on the page." )
  };

} );

document.getElementById( 'BtnDemosthenes' ).addEventListener( 'click', function() {

  console.log( "This speech was written by " + demosthenesSpeech.author + " in " + demosthenesSpeech.year + "." )

  if ( demosthenesSpeech.yearIsBCE == false ) {
    console.log( "This speech took place during the common era." )
  } else {
    console.log( "This speech took place before the common era." )
  };

  if ( demosthenesSpeech.yearIsBCE == true || ( demosthenesSpeech.year < churchillSpeech.year && demosthenesSpeech.year < ghandiSpeech.year ))  {
    console.log( "This is the oldest speech on the page." )
  } else if ( demosthenesSpeech.year > churchillSpeech.year && demosthenesSpeech.year > ghandiSpeech.year ) {
    console.log( "This is the most recent speech on the page." )
  };

} );
