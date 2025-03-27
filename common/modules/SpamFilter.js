NAMESPACE.SpamFilter = {

  BAN: 2,

  ban: function(id) {

    this.spammers.set(id, Date.now());

    return this.BAN;

  },

  filter: function(id, text) {

    var now = Date.now();

    text = text.trim();

    if (!text) return;

    if (!this.spamStats) this.spamStats = new Map;
    if (!this.spammers) this.spammers = new Map;

    /* check spammer status */

    var status = this.spammers.get(id);

    if (status && (now - status < 60000)) return true;

    /* */

    if (!this.spamStats.get(id)) this.spamStats.set(id, {
      times: [0, 0],
      last: ""
    });

    var stats = this.spamStats.get(id);

    /* Spam interval */

    var times = stats.times;

    var delta = now - times[0];

    times[0] = now;

    if (delta > 3000) times[1] = 0;

    else times[1]++;

    if (times[1] > 3) return this.ban(id);

    /* Phrases */

    if (this.lastText && text === this.lastText && this.lastid === id) return this.ban(id);
    if (text.indexOf("http") > -1 && text.indexOf("wilds.io") === -1) return this.ban(id);
    if (text.indexOf("recruiter=") > -1) return this.ban(id);
    if (text.toLowerCase().indexOf("fuck") > -1) return this.ban(id);

    /* Repetitive texts */

    var words = text.split(" ");
    var wordsTable = {};

    for (var i = 0; i < words.length; i++) {

      var word = words[i];
      wordsTable[word] = (wordsTable[words[i]] | 0) + 1;

      if (word.length > 1 && wordsTable[word] >= 5) return this.ban(id);
      if (word.length <= 2 && wordsTable[word] >= 6) return this.ban(id);

    }

    /* Repeating last text */

    if (stats.last === text) {

      return this.ban(id);

    }

    stats.last = text;

    return false;

  }

};


SpamFilter = NAMESPACE.SpamFilter;