// code your solution here
// describe('superbowlWin(record)', function () {}
superbowlWin = (record) => {

    const result = record.find( record => record.result === "W" );
    
    return !!result ? result.year : undefined;
  }
