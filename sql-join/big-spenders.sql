select "p"."amount" as "paymentAmount",
       "c"."firstName" as "customerFirstName",
       "c"."lastName" as "customerLastName"
from "payments" as "p"
join "customers" as "c" using ("customerId")
order by "p"."amount" desc
limit 10;
