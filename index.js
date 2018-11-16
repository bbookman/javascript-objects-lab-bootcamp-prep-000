var recipes = { 
  
  cookies: ["Butter", "Sugar"],
  candy: ["Sugar", "Gum"]
}

function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, object, {key:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key)
  var newObj = Object.assign({}, obj)
  delete new_object.key
  return new_object
}