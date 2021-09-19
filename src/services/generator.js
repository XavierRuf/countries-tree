import * as faker from "faker";


const generateObjects = ({ depth, childrenCount }) => {
    return {
      name: faker.name.findName(),
      countries:
        depth > 0
          ? [...new Array(childrenCount)].map(() => {
              return generateObjects({ depth: depth - 1, childrenCount });
            })
          : [],
    };
  };
  
  export const generateMockedData = ({ depth, childrenCount }) => {
    return {
      data: [...new Array(childrenCount)].map(() => {
        return generateObjects({ depth: depth - 1, childrenCount });
      }),
    };
  };
