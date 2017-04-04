(function($) {
  // compare function for
  function compare(a,b) {
  if (a.count < b.count)
    return 1;
  if (a.count > b.count)
    return -1;
  return 0;
}

  var myPoll = new window.spredfast.Poller();

  var resultsArray = [];

  myPoll.poll({type:'fruits', frequency:15}, function(results) {

    for (var i = 0; i < results.length; i ++) {
      resultsArray.push(results[i]);
    }

  });

  myPoll.poll({frequency:15}, function(results) {

    for (var i = 0; i < results.length; i ++) {
      resultsArray.push(results[i]);
    }

    resultsArray.sort(compare);

    // I could have probably done this better with a loop but I was pressed for time
    $('.first').html(resultsArray[0].name + " <span class='count-mentions'>" + resultsArray[0].count + " Mentions</span>");
    $('.second').html(resultsArray[1].name + " <span class='count-mentions'>" + resultsArray[1].count + " Mentions</span>");
    $('.third').html(resultsArray[2].name + " <span class='count-mentions'>" + resultsArray[2].count + " Mentions</span>");
    $('.fourth').html(resultsArray[3].name + " <span class='count-mentions'>" + resultsArray[3].count + " Mentions</span>");
    $('.fifth').html(resultsArray[4].name + " <span class='count-mentions'>" + resultsArray[4].count + " Mentions</span>");
  });
}(jQuery));
