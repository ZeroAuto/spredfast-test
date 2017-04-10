(function($) {
  // compare function for sorting array in descending order
  function compare(a,b) {
    if (a.count < b.count)
      return 1;
    if (a.count > b.count)
      return -1;
    return 0;
  }

  const myPoll = new window.spredfast.Poller();

  function executeCall() {
    const resultsArray = [];

    myPoll.poll({type:'fruits', }, (results) => {

      for (let i = 0; i < results.length; i ++) {
        resultsArray.push(results[i]);
      }

    });

    myPoll.poll({}, (results) => {

      for (let i = 0; i < results.length; i ++) {
        resultsArray.push(results[i]);
      }

      resultsArray.sort(compare);

      // jQuery each loop makes things easier
      $('.produce-name').each(function(i, obj){
        $(obj).html(resultsArray[i].name + " <span class='count-mentions'>" + resultsArray[i].count + " Mentions</span>");
      });
    });
  }

  // initial api call to populate elements in the markup
  executeCall();

  // execute the api call every 15 seconds
  window.setInterval(executeCall, 15000);
}(jQuery));
