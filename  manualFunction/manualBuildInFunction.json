{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	},
	"Split without split()": {
		"prefix": "splitFunc",
		"body": [
			"function splitStr(str, operator = '') {",
			"  if (Array.isArray(str)) return",
			"  const result = []",
			"  let temp = ''",
			"",
			"  for (let i = 0; i < str.length; i++) {",
			"    if (str[i] == operator) {",
			"      result.push(temp)",
			"      temp = ''",
			"    } else {",
			"      temp += str[i]",
			"    }",
			"    if (i == str.length - 1) result.push(temp)",
			"  }",
			"  return result",
			"}"
		],
		"description": "Split without split()"
	},
	"Sort without sort()": {
		"prefix": "sortFunc",
		"body": [
			"function sorting(arr) {",
			"  for (let i = 0; i < arr.length - 1; i) {",
			"    if (arr[i + 1] > arr[i]) {",
			"      const temp = arr[i + 1]",
			"      arr[i + 1] = arr[i]",
			"      arr[i] = temp",
			"      i = Math.max(0, i - 1)",
			"    } else i++",
			"  }",
			"  return arr",
			"}"
		],
		"description": "Sort without sort()"
	},
	"Find smallest number in Array": {
		"prefix": "smallestNumFunc",
		"body": [
			"function smallestNum(arr) {",
			"  let smallestNum = Number.MAX_SAFE_INTEGER",
			"  for (let i = 0; i < arr.length; i++) {",
			"    if (arr[i] < smallestNum) smallestNum = arr[i]",
			"  }",
			"",
			"  return smallestNum",
			"}"
		],
		"description": "Find smallest number in Array"
	},
	"Find largest number in Array": {
		"prefix": "largestNumFunc",
		"body": [
			"function smallestNum(arr) {",
			"  let largestNum = 0",
			"  for (let i = 0; i < arr.length; i++) {",
			"    if (arr[i] > smallestNum) largestNum = arr[i]",
			"  }",
			"",
			"  return largestNum",
			"}"
		],
		"description": "Find largest number in Array"
	},
	"Filter duplicate": {
		"prefix": "filterDuplicateFunc",
		"body": [
			"function filterDuplicate(arr) {",
			"  const result = []",
			"",
			"  for (let i = 0; i < arr.length; i++) {",
			"    for (let j = i + 1; j < arr.length; j++) {",
			"      if (arr[i] == arr[j]) delete arr[j]",
			"    }",
			"    if (arr[i]) result.push(arr[i])",
			"  }",
			"",
			"  return result",
			"}"
		],
		"description": "Filter duplicate"
	},
	"Reduce Function": {
		"prefix": "reduceFunc",
		"body": [
			"function reduceFunc(arr) {",
			"  if (!Number.isInteger(arr)) {",
			"    let result = 0",
			"    for (let i = 0; i < arr.length; i++) {",
			"      result += Number(arr[i])",
			"    }",
			"    return result",
			"  }",
			"",
			"  let result = 0",
			"  for (let i = 0; i < arr.length; i++) {",
			"    result += arr[i]",
			"  }",
			"  return result",
			"}"
		],
		"description": "Reduce Function"
	},
	"Slice Function": {
		"prefix": "sliceFunc",
		"body": [
			"function sliceFunc(data, start, end) {",
			"  if (!end) end = data.length",
			"",
			"  if (Array.isArray(data)) {",
			"    const result = []",
			"",
			"    for (let i = start; i < end; i++) result.push(data[i])",
			"",
			"    return result",
			"  }",
			"",
			"  let result = ''",
			"",
			"  for (let i = start; i < end; i++) {",
			"    result += data[i]",
			"  }",
			"",
			"  return result",
			"}"
		],
		"description": "Slice Function"
	},
	"Join Function": {
		"prefix": "joinFunc",
		"body": [
			"function joinFunc(data, operator) {",
			"  let result = ''",
			"",
			"  for (let i = 0; i < data.length; i++) {",
			"    if (i == data.length - 1) {",
			"      result += data[i]",
			"    } else {",
			"      result += data[i] + operator",
			"    }",
			"  }",
			"  return result",
			"}"
		],
		"description": "Join Function"
	},
	"Splice Function": {
		"prefix": "spliceFunc",
		"body": [
			"function spliceFunc(data, start, deleteCount = 0, item = []) {",
			"  if (!data.length) return",
			"",
			"  if (!item.length) {",
			"    const result = []",
			"    let index = 0",
			"",
			"    for (let i = start; i < data.length; i++) {",
			"      delete data[i]",
			"      index++",
			"      if (index == deleteCount) break",
			"    }",
			"    for (let i = 0; i < data.length; i++) {",
			"      if (data[i]) result.push(data[i])",
			"    }",
			"    return result",
			"  }",
			"",
			"  if (item.length < deleteCount) deleteCount = item.length",
			"",
			"  let index = 0",
			"  for (let i = start; i < data.length; i++) {",
			"    data[i] = item[index]",
			"    index++",
			"    if (index == deleteCount) break",
			"  }",
			"  return data",
			"}"
		],
		"description": "Splice Function"
	}
}