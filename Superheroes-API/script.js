const URL = "https://www.superheroapi.com/api.php/861782874414534/";
$(document).ready(function () {

    $("#submitBtn").click(function () {
        console.log("Button Clicked..");

        let result = $("#result");
        result.text("");

        let charName = $("#charName");

        let characterId = $("#characterId").val();
        $.ajax({
            url: `${URL}/${characterId}`,
            type: "GET",
            success: function (data) {

                if (data.size > 1) {

                    console.log(data.size);

                    charName.text(data.name);
                    $("#superheroImage").attr("src", `${data.image.url}`);
                    $("#superheroImage").attr("display", "block");

                    //====================== APPEARANCE =========================

                    let _appearance = data.appearance;
                    //console.log(_appearance);
                    let row1 = `< tr > <td colspan="6" class="bg-dark text-primary text-center p-1"><h2>Appearance</h2></td></ > `;
                    let row2 = `< tr >
                               <th>Gender</th>
                               <td>${_appearance.gender}</td>
                            </ >

                            <tr>
                                <th>Race</th>
                                <td>${_appearance.race}</td>
                            </tr>

                             <tr>
                                <th>Eye Color</th>
                                <td>${_appearance['eye-color']}</td>
                             </tr>

                             <tr>
                                <th>Hair Color</th>
                                <td>${_appearance['hair-color']}</td>
                             </tr>
							
                             <tr>
                                <th>Height</th>
                                <td>${_appearance.height[0]} , ${_appearance.height[1]}</td>
                             </tr>

                             <tr>
                                <th>Weight</th>
                                <td>${_appearance.weight[0]} , ${_appearance.weight[1]}</td>
                             </tr>
							`;

                    result.append(row1).append(row2);

                    //=================== BIOGRAPHY  ================================

                    let _bio = data.biography;
                    //console.log(_bio);
                    let row3 = `< tr > <td colspan="6" class="bg-dark text-success text-center p-1"><h2>Biography</h2></td></ > `;

                    let row4 = `< tr >
                               <th>Full Name</th>
                               <td>${_bio['full-name']}</td>
                            </ >

                            <tr>
                                <th>Place of Birth</th>
                                <td>${_bio['place-of-birth']}</td>
                            </tr>

                            <tr>
                            <th>First Appearance</th>
                            <td>${_bio['first-appearance']}</td>
                         </tr>

                             <tr>
                                <th>Alignment</th>
                                <td>${_bio.alignment}</td>
                             </tr>

                             <tr>
                                <th>Publisher</th>
                                <td>${_bio.publisher}</td>
                             </tr>
							
                             <tr>
                                <th>Aliases</th>
                                <td>${_bio.aliases[0]} , ${_bio.aliases[1]} , ${_bio.aliases[2]}</td>
                             </tr>

							`;

                    result.append(row3).append(row4);

                    //==================== POWERSTATS ===========================

                    let _power = data.powerstats;
                    //console.log(_power);
                    let row5 = `< tr > <td colspan="6" class="bg-dark text-danger text-center p-1"><h2>Powerstats</h2></td></ > `;

                    let row6 = `< tr >
                              <th>Combat</th>
                              <td>${_power.combat}</td>
                            </ >
                
                            <tr>
                               <th>Intelligence</th>
                               <td>${_power.intelligence}</td>
                            </tr>

                            <tr>
                                <th>Strength</th>
                                <td>${_power.strength}</td>
                            </tr>

                            <tr>
                                <th>Speed</th>
                                <td>${_power.speed}</td>
                            </tr>

                             <tr>
                                <th>Durability</th>
                                <td>${_power.durability}</td>
                             </tr>

                             <tr>
                                <th>Power</th>
                                <td>${_power.power}</td>
                             </tr>

							`;

                    result.append(row5).append(row6);

                }
                else {
                    result.append("<b class='bg-warning'>Something's wrong, try again after some time </b>");
                    result.append("<i class='bg-warning'>May be count of request limit has exceeded for the day</i>");
                }



            },
            error: function (err) {
                console.log(err)
                result.text("Something Wrong !!");
            }
        });
    });
});