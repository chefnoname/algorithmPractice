//John is a programmer. He treasures his time very much. He lives on the n floor of a building.

//Every morning he will go downstairs as quickly as possible to begin his great work today.

//There are two ways he goes downstairs: walking or taking the elevator.

// Please help John to calculate the shortest time to go downstairs.

// When John uses the elevator, he will go through the following steps:

// 1. Waiting the elevator from m floor to n floor;
// 1a. Or take the stairs to m floor;
// 2. Waiting the elevator open the door and go in;
// 3. Waiting the elevator close the door;
// 4. Waiting the elevator down to 0 floor;
// 5. Waiting the elevator open the door and go out;
// (the time of go in/go out the elevator will be ignored)

const shorterestTime = (n, m, speeds) => {
  const elevatorTravel = justElevator(n, m, speeds[0], speeds[1], speeds[2]);

  const walkingTravel = n * speeds[3];

  const walkingToElevator = walkToElevator(
    n,
    m,
    speeds[0],
    speeds[1],
    speeds[2],
    speeds[3]
  );

  if (elevatorTravel <= walkingTravel && elevatorTravel <= walkingToElevator) {
    return elevatorTravel;
  } else if (
    walkingTravel <= elevatorTravel &&
    walkingTravel <= walkingToElevator
  ) {
    return walkingTravel;
  }

  return walkingToElevator;
};

const justElevator = (
  myFloor,
  elevatorFloor,
  speed,
  elevatorOpen,
  elevatorClose
) => {
  const distance = myFloor - elevatorFloor;
  const openAndClose = elevatorOpen + elevatorClose;
  const timeToGetToGround = myFloor * speed;
  const elevatorAtMyFloor =
    distance < 0 ? distance * -1 * speed : distance * speed;

  const imInTheElevator = elevatorAtMyFloor + openAndClose;

  return imInTheElevator + timeToGetToGround + elevatorOpen;
};

const walkToElevator = (
  myFloor,
  elevatorFloor,
  elevatorSpeed,
  elevatorOpen,
  elevatorClose,
  walkingSpeed
) => {
  const distance = myFloor - elevatorFloor;

  const timeToElevator =
    distance < 0 ? distance * walkingSpeed * -1 : distance * walkingSpeed;

  const openAndClose = elevatorOpen + elevatorClose;

  const timeToGetGround = elevatorFloor * elevatorSpeed + elevatorOpen;

  return timeToElevator + openAndClose + timeToGetGround;
};

shorterestTime(4, 3, [2, 3, 4, 5]);

shorterestTime(7, 6, [3, 1, 1, 4]);

shorterestTime(4, 5, [1, 2, 3, 10]);

shorterestTime(1, 43, [36, 7, 36, 87]);

shorterestTime(4, 4, [1, 2, 3, 10]);
