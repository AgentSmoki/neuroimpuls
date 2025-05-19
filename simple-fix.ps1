$content = Get-Content -Path "index.html" -Raw
$tgSection = Get-Content -Path "tg-section.txt" -Raw

$updatedContent = $content -replace '            </section>\r\n\r\n           \r\n\r\n            <section class="operations"', "            </section>`r`n`r`n$tgSection`r`n`r`n            <section class=`"operations`""

Set-Content -Path "index.html" -Value $updatedContent