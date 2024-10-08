// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 20;

var enemyNames = ['Roboto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function (now with paremeter for enemy's name)
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');

                playerMoney = playerMoney - 10;
                console.log("playerMOney", playerMoney);
                break;
            }
        }

        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            playerMoney = playerMoney + 20;

            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health reaminig.'
        );

        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');

            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');

        }
    }
};

var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 20;

    // fight each enemy roboto by looping over them and fightinig them one at a time
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    
            var pickedEnemyName = enemyNames[i];
    
            enemyHealth = 50;
    
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {
                
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }
            }
        }
    
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }

    endGame();
};


var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '.');
    } else {
        window.alert("You've lost your robot in battle!");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
};

// go to shop between battles function
var shop = function() {
    var shopOptionPrompt = window.prompt(
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );;

    switch (shopOptionPrompt) {
        case 'REFILL':
        case 'refill':
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case 'UPGRADE':
        case 'upgrade':
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
            case 'LEAVE':
            case 'leave':
                window.alert('Leaving the store.');
            
                // do nothing, so function will end
                break;
            default:
                window.alert('You did not pick a valid option. Try again.');
            
                // call shop() again to force player to pick a valid option
                shop();
                break;
    }
};

// start first game when page loads
startGame();