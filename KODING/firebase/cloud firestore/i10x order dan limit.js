=============================================================================================================
=============================================================================================================
-------------------------------------------------------------------------------------------------------------
MENGURUTKAN DAN MEMBATASI DATA
import { query, orderBy, limit } from "firebase/firestore";
const q = query(citiesRef, orderBy("name"), limit(3));
---------------------------
import { query, orderBy, limit } from "firebase/firestore";
const q = query(citiesRef, orderBy("name", "desc"), limit(3));
---------------------------
import { query, orderBy } from "firebase/firestore";
const q = query(citiesRef, orderBy("state"), orderBy("population", "desc"));
---------------------------
import { query, where, orderBy, limit } from "firebase/firestore";
const q = query(citiesRef, where("population", ">", 100000), orderBy("population"), limit(2));

-------------------------------------------------------------------------------------------------------------
BATASAN
import { query, where, orderBy } from "firebase/firestore";
const q = query(citiesRef, where("population", ">", 100000), orderBy("population"));
---------------------------
import { query, where, orderBy } from "firebase/firestore";
const q = query(citiesRef, where("population", ">", 100000), orderBy("country"));

-------------------------------------------------------------------------------------------------------------

