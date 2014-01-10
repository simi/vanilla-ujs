{"version":3,"file":"vanilla-ujs.min.js","sources":["vanilla-ujs.js"],"names":["window","document","LiteAjax","options","method","url","location","href","async","ajax","undefined","xhr","XMLHttpRequest","addEventListener","event","CustomEvent","detail","dispatchEvent","success","status","error","open","beforeSend","send","data","form","input","element","target","matches","call","getAttribute","toLowerCase","createElement","action","style","display","setAttribute","appendChild","body","submit","preventDefault","message","confirm","stopPropagation","stopImmediatePropagation","CSRF","token","querySelector","param","sameOrigin","origin","a","create","split","join","indexOf","e","setRequestHeader","toUpperCase"],"mappings":"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"}