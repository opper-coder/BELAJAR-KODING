// stop looping -------------------------
for($i=0; $i<10; $i++){ if($i == 4){ break; }   // berhenti loop pada 4
  echo "halo ke:" . $i;
}

// skip looping -------------------------
for($j=0; $j<10; $j++){ if($j == 4){ continue; } // skip angka 4
  echo "halo ke:" . $j;
}
