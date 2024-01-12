const color_pattern = ['c1-b1033a', 'c2-fbb729', 'c3-ceecf1', 'c4-898b8f', 'c5-b1033a', 'c6-ceecf1', 'c7-fbb729', 'c8-dae349'];
const num_circles = color_pattern.length;
const sides = 4;
var current_circle = 1;
var current_side = 1;
var direction_change_at = num_circles / sides;
var start_x_coordinate = 125;
var start_y_coordinate = 25;
var step_x = 50;
var step_y = 50;
var time_to_wait = 25;

function loadColoredCircleDiamondPattern(i) {
    var circle_id = 'c' + i.toString();

    
    setTimeout(function(){
        var circle_element = document.createElement('div');
        
        circle_element.className = 'solid-circle ' + color_pattern[i] + ' hidden';
        circle_element.style = 'top: ' + start_y_coordinate + 'px; left: ' + start_x_coordinate + 'px;';
        circle_element.id = circle_id;

        start_x_coordinate+=step_x;
        start_y_coordinate+=step_y;

        if (current_circle === direction_change_at) {
            direction_change_at+=2;

            switch (current_side) {
                case 1: // start side 2
                    step_x = -50;
                    step_y = 50;
                    break;
                case 2: // start side 3
                    step_x = -50;
                    step_y = -50;
                    break;
                case 3: // start side 4
                    step_x = 50;
                    step_y = -50;
                    break;
                case 4:
                    break;
            }

            current_side+=1;
        }
        
        document.body.append(circle_element);
        current_circle+=1;


    }, time_to_wait);

    setTimeout(function(e) {
        document.getElementById(circle_id).className = 'solid-circle ' + color_pattern[i];
    }, time_to_wait*9);

    time_to_wait+=25;
}

for(i=0;i<color_pattern.length;i++) {
    loadColoredCircleDiamondPattern(i);
}