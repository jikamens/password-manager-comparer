var rawData = [
    ["Feature",                                                         "Tags",                              ["1Password", "Dashlane", "Bitwarden", "LastPass", "Keeper",  "Zoho Vault"],  "CompareFunction"],
    ["Chrome support",                                                  ["Chrome"],                          ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Firefox support",                                                 ["Firefox"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Edge support",                                                    ["Edge", "Windows"],                 ["yes",       "yes",      "yes",       "yes",      "yes",     "no"],          null],
    ["Safari support",                                                  ["Safari", "MacOS"],                 ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["MacOS support",                                                  ["MacOS"],                           ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Windows support",                                                 ["Windows"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Linux support",                                                   ["Linux"],                           ["poor",      "poor",     "yes",       "yes",      "yes",     "yes"],         null],
    ["MacOS command-line client",                                      ["MacOS", "CLI"],                    ["poor",      "no",       "yes",       "poor",     "yes",     "no"],          null],
    ["Windows command-line client",                                     ["Windows", "CLI"],                  ["poor",      "no",       "yes",       "poor",     "yes",     "no"],          null],
    ["Linux command-line client",                                       ["Linux", "CLI"],                    ["poor",      "no",       "yes",       "poor",     "yes",     "no"],          null],
    ["Android support, including auto-fill",                            ["Android"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "poor"],        null],
    ["Android auto-fill in Chrome",                                     ["Android"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "no"],          null],
    ["Auto-fill in Android work profile",                               ["Android", "Enterprise"],           ["yes",       "yes",      "no",        "yes",      "yes",     "yes"],         null],
    ["Android auto-fill shows full usernames",                          ["Android"],                         ["yes",       "yes",      "yes",       "yes",      "no",      "no"],          null],
    ["iOS support, including auto-fill",                                ["iOS"],                             ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Two-factor authentication",                                       [],                                  ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["YubiKey support in browser (Enterprise)",                         ["Enterprise", "YubiKey"],           ["no",        "no",       "yes",       "yes",      "yes",     "no"],          null],
    ["YubiKey support in browser (Personal)",                           ["Personal", "YubiKey"],             ["no",        "no",       "yes",       "yes",      "yes",     "no"],          null],
    ["YubiKey support in Android",                                      ["Android", "YubiKey"],              ["no",        "no",       "yes",       "yes",      "no",      "no"],          null],
    ["YubiKey support in iOS",                                          ["iOS", "YubiKey"],                  ["no",        "no",       "yes",       "yes",      "no",      "no"],          null],
    ["Saved password in Android",                                       ["Android"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Saved password in iOS",                                           ["iOS"],                             ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Fingerprint login in Android",                                    ["Android"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Fingerprint login in iOS",                                        ["iOS"],                             ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Synchronization across devices",                                  [],                                  ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Import from LastPass",                                            ["LastPassMigration"],               ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["LastPass import distinguishes work from personal items",          ["LastPassMigration", "Enterprise"], ["no",        "no",       "no",        "yes",      "no",      "no"],          null],
    ["Preserves LastPass folders in some way when importing",           ["LastPassMigration"],               ["yes",       "doubtful", "yes",       "yes",      "yes",     "yes"],         null],
    ["Personal linked account support (or the equivalent)",             ["Enterprise"],                      ["yes",       "poor",     "yes",       "yes",      "no",      "no"],          null],
    ["Save location (personal vs. work) specified at creation time",    ["Enterprise"],                      ["yes",       "no",       "yes",       "yes",      "no",      "no"],          null],
    ["Save location (folder / collection / space) editable in web app", [],                                  ["yes",       "no",       "yes",       "yes",      "yes",     "yes"],         null],
    ["Sensible password quality checks for master password",            [],                                  ["yes",       "no",       "yes",       "yes",      "yes",     "yes"],         null],
    ["Password history on Linux",                                       ["Linux"],                           ["yes",       "no",       "yes",       "yes",      "yes",     "yes"],         null],
    ["Password history on Windows",                                     ["Windows"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Password history on MacOS",                                      ["MacOS"],                           ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Secure notes",                                                    [],                                  ["yes",       "yes",      "yes",       "yes",      "yes",     "poor"],        null],
    ["Attachments on notes on Linux",                                   ["Linux"],                           ["no",        "no",       "yes",       "yes",      "yes",     "yes"],         null],
    ["Attachments on notes on Windows",                                 ["Windows"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Attachments on notes on MacOS",                                  ["MacOS"],                           ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Shared folders with access control on Linux",                     ["Linux", "Enterprise"],             ["yes",       "no",       "yes",       "yes",      "yes",     "yes"],         null],
    ["Shared folders with access control on Windows",                   ["Windows", "Enterprise"],           ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Shared folders with access control on MacOS",                    ["MacOS", "Enterprise"],             ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Items can exist in multiple groups with distinct access control", ["Enterprise"],                      ["no",        "no",       "yes",       "no",       "yes",     "yes"],         null],
    ["Nested folders",                                                  [],                                  ["no",        "no",       "yes",       "yes",      "yes",     "poor"],        null],
    ["Resists auto-filling invisible forms",                            [],                                  ["yes",       "yes",      "yes",       "no",       "yes",     "unknown"],     null],
    ["Browser plugin only fills selected form",                         [],                                  ["no",        "unknown",  "no",        "no",       "unknown", "yes"],         null],
    ["Browser plugin displays icon in form fields",                     [],                                  ["yes",       "yes",      "no",        "yes",      "yes",     "yes"],         null],
    ["Browser plugin prompts to save new sites on Linux",               ["Linux"],                           ["no",        "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Browser plugin prompts to save new sites on Windows",             ["Windows"],                         ["unknown",   "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Browser plugin prompts to save new sites on MacOS",              ["MacOS"],                           ["unknown",   "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["2FA integrated into login entries in vault",                      [],                                  ["no",        "no",       "yes",       "no",       "no",      "no"],          null],
    ["Auto-fill in browser disabled by default",                        [],                                  ["yes",       "no",       "yes",       "no",       "no",      "yes"],         null],
    ["Auto-fill in browser can be disabled by preference",              [],                                  ["yes",       "no",       "yes",       "yes",      "yes",     "yes"],         null],
    ["Admins can reset passwords",                                      ["Enterprise"],                      ["yes",       "yes",      "no",        "yes",      "no",      "no"],          null],
    ["Admins can access other people's unshared credentials",           ["Enterprise"],                      ["yes",       "no",       "no",        "yes",      "yes",     "no"],          null],
    ["Admins can reset other people's 2FA",                             ["Enterprise"],                      ["yes",       "no",       "no",        "yes",      "no",      "yes"],         null],
    ["2FA can be enforced at the organization level",                   ["Enterprise"],                      ["no",        "no",       "no",        "yes",      "yes",     "yes"],         null],
    ["2FA can be audited at the organization level",                    ["Enterprise"],                      ["yes",       "no",       "yes",       "yes",      "yes",     "no"],          null],
    ["Exporting items on Linux",                                        ["Linux"],                           ["no",        "no",       "yes",       "yes",      "yes",     "yes"],         null],
    ["Exporting items on Windows",                                      ["Windows"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Exporting items on MacOS",                                       ["MacOS"],                           ["yes",       "yes",      "yes",       "yes",      "yes",     "yes"],         null],
    ["Export includes attachments",                                     [],                                  ["unknown",   "unknown",  "no",        "no",       "no",      "no"],          null],
    ["Responsive to bug reports and feature requests",                  [],                                  ["no",        "unknown",  "yes",       "no",       "no",      "unknown"],     null],
    ["Open source",                                                     [],                                  ["no",        "no",       "yes",       "no",       "no",      "no"],          null],
    ["Option to self-host",                                             ["SelfHosting"],                     ["poor",      "no",       "yes",       "no",       "no",      "no"],          null],
    ["Enterprise price per user per month",                             ["Enterprise"],                      [7.99,        4.00,       3.00,        6.00,       3.75,      3.60],          priceCompare],
    ["Personal price per user per month (no Attachments or YubiKey)",   ["Personal"],                        [2.99,        4.99,       0.00,        2.00,       2.50,      0],             priceCompare],
    ["Personal price per user per month (with Attachments & YubiKey)",     ["Personal"],                        [2.99,        4.99,       0.84,        2.00,       2.50,      0],             priceCompare],
    ["Has a useful status page that can be subscribed to",              [],                                  ["yes",       "yes",      "no",        "yes",      "no",      "yes"],         null],
    ["Number of outages in the past six months",                        [],                                  [1,           12,         0,           12,         0,         2],             priceCompare],
];


dataTags = [];
for (var i = 1; i < rawData.length; i++) {
    var tags = rawData[i][1];
    for (var j = 0; j < tags.length; j++)
        if (! dataTags.includes(tags[j])) dataTags.push(tags[j]);
    dataTags.sort();
}

function yesNoCompare(n1, v1, n2, v2) {
    if (v1 == v2) return "tie";
    if (v1 == "yes") return n1;
    if (v2 == "yes") return n2;
    if (v1 == "no") return n2;
    if (v2 == "no") return n1;
    return "tie";
}

function priceCompare(n1, v1, n2, v2) {
    if (v1 == v2) return "tie";
    return v1 < v2 ? n1 : n2;
}

function formatValue(v) {
    if (v + 0 == v) return v;
    if (v == "yes") return "<span style='color: #0D8050'>" + v + "</span>";
    if (v == "no") return "<span style='color: #C23030'>" + v + "</span>";
    return "<span style='color: #BF7326;'>" + v + "</span>";
}

function formatTable() {
    var compare1, compare2;
    try {
        compare1 = document.getElementById('compare1').value;
        compare2 = document.getElementById('compare2').value;
    }
    catch {
        // First time page is loaded.
    }
    var products = rawData[0][2];
    var comparing, index1, index2, score1, score2;
    if (compare1 && compare2) {
        comparing = true;
        score1 = score2 = 0;
        for (var i = 0; i < products.length; i++) {
            if (products[i] == compare1) index1 = i;
            if (products[i] == compare2) index2 = i;
        }
    }

    var featureList = "<h1>Password Manager Comparison Tool</h1><p class='credits'>Borrowed from an <a href='https://medium.com/@QuantopianCyber/head-to-head-evaluation-of-five-password-managers-8faa4851c767'>article by Jonathan Kamens, Quantopian Security</a>.</p><p class='features'><b>Toggle features you care about:</b>";
    var wantFeatures = [];
    for (var i = 0; i < dataTags.length; i++) {
        var feature = dataTags[i];
        var id = "feature" + feature;
        var checked;
        try {
            checked = document.getElementById(id).checked;
        }
        catch {
            checked = true;
        }
        if (checked) wantFeatures.push(feature);
        featureList += " <span style='white-space: nowrap;'>" +
            "<input type='checkbox' id='" + id + "'";
        if (checked) featureList += " checked";
        featureList += " onchange='changeTable()'><label for='" + id + "'>" +
            feature + "</label></span>\n";
    }
    featureList += "</p>";

    t = "<div class='table-wrapper'><table>\n";
    t += "<tr><th>" + rawData[0][0] + "</th>";
    for (var i = 0; i < products.length; i++)
        t += "<th>" + products[i] + "</th>";
    if (comparing) t += "<th>" + compare1 + " vs. " + compare2 + "</th>\n";
    t += "</tr>\n";
    for (var i = 1; i < rawData.length; i++) {
        var tags = rawData[i][1];
        if (tags.length) {
            var found = true;
            for (var j = 0; j < tags.length; j++) {
                if (! wantFeatures.includes(tags[j])) {
                    found = false;
                    break;
                }
            }
            if (! found) continue;
        }
        t += "<tr><td>" + rawData[i][0] + "</td>";
        var values = rawData[i][2];
        for (var j = 0; j < values.length; j++)
            t += "<td>" + formatValue(values[j]) + "</td>";
        if (comparing) {
            var cmp;
            if (! (cmp = rawData[i][3]))
                cmp = yesNoCompare
            winner = cmp(compare1, values[index1], compare2, values[index2]);
            if (winner == compare1) score1++;
            else if (winner == compare2) score2++;
            t += "<td>" + winner + "</td>";
        }
        t += "</tr>\n";
    }

    if (comparing) {
        t += "<tr><th align=left colspan='" + (products.length + 1) +
            "'>Score:</th>";
        t += "<th align=left>" + compare1 + " - " + score1 + "<br/>" +
            compare2 + " - " + score2 + "</th></tr>\n";
    }

    t += "</table></div>\n";
    t += "<form>\n";
    t += featureList;
    t += "<p class='compare'><b>Add a comparison:</b> Compare ";
    t += "<select id='compare1' onchange='changeTable()'>\n";
    t += "<option value=''>(select)</option>\n";
    for (var i = 0; i < products.length; i++) {
        if (products[i] == compare2) continue;
        t += "<option value='" + products[i] + "'";
        if (products[i] == compare1) t += " selected";
        t += ">" + products[i] + "</option>\n";
    }
    t += "</select>\n";
    t += " to ";
    t += "<select id='compare2' onchange='changeTable()'>\n";
    t += "<option value=''>(select)</option>\n";
    for (var i = 0; i < products.length; i++) {
        if (products[i] == compare1) continue;
        t += "<option value='" + products[i] + "'";
        if (products[i] == compare2) t += " selected";
        t += ">" + products[i] + "</option>\n";
    }
    t += "</select>\n";
    t += "</p>\n";
    t += "</form>\n";
    return t;
}

function changeTable() {
    document.body.innerHTML = formatTable();
}

function drawTable() {
    document.body.innerHTML = formatTable();
}

function onLoad() {
    drawTable();
}
