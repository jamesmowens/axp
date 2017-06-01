/* Returns box shadow for given material level as specified by
*  @param level-The level for the material ie 1 for level 1
*  @returns a string that can be used for the box shadow
*/
export default function getShadowForLevel(level) {
  switch (level){
    case 1:
      return '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
    case 2:
      return '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    case 3:
      return '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    case 4:
      return '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
    case 5:
      return '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)';
  }
}
