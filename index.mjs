import { readFileSync } from 'fs';

// You got two things:
// 1. Pile of letters
const pile = JSON.parse(readFileSync('pile.txt', 'utf8'));
// 2. The ciphered message (encrypted using one of basic ciphers, nothing hardcore :D )
const cipher = 'U LGA RHSRAUAHAUTJ IUNPLXR OTX SXLGMOGRA';

// The key is in the pile
// Find the key and use it to decipher the message
