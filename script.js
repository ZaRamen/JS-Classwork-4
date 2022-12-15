const ORGANISM_LIST = ["Air;None;None", "Earth;None;None;", "Water;None;None;","Fire;None;None;", "Alcohol;Fire;Water"]
const NAME = 0, PARENT_1 = 1, PARENT_2 = 2;
const ORGANISM_OFFSET = 4;
const NONE = "None";


function getOrganismData(organism, idx)
{
    return organism.split(';')[idx];
}

function areParents(organism, parent1, parent2)
{
    var firstParent = getOrganismData(organism, PARENT_1);
    var secondParent = getOrganismData(organism, PARENT_2);
    var parent1 = getOrganismData(parent1, NAME);
    var parent2 = getOrganismData(parent2, NAME);

    return (firstParent == parent1 || secondParent == parent1) && (firstParent == parent2 || secondParent == parent2);
}
function findOrganism(orgname)
{
    for (var i in ORGANISM_LIST)
    {
        if (getOrganismData(ORGANISM_LIST[i], NAME) == orgname)
        {
            return ORGANISM_LIST[i];
        }
    }
}
function findCombo(org1, org2)
{
    for (var i in ORGANISM_LIST)
    {
        if (areParents(ORGANISM_LIST[i], org1, org2))
        {
            return ORGANISM_LIST[i];
        }
    }
    return NONE;
}
