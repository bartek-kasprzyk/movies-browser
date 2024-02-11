import { Title, Content, Description, Image, Item, Opinion, Text, Tag, Tags, Year, Rating, Production, Info, Vector, } from './styled';
import poster from '../../images/poster.png';
import star from '../../images/star.svg';
import { Tile } from '../../../../components/Tile';

const MovieTile = () => (
    <Tile>
        <Image src={poster} alt="" />
        <Content>
            <Title>Mulan</Title>
            <Year>2020</Year>
            <Production>
                <div><Info>Production:</Info>China, United States of America</div>
                <div><Info>Release date:</Info>24.10.2020</div>
            </Production>
            <Tags>
                <Tag>Action</Tag>
                <Tag>Adventure</Tag>
                <Tag>Drama</Tag>
            </Tags>
            <Opinion>
                <Rating>
                    <Vector src={star} alt="" />
                    <Text>7,8</Text>
                </Rating>
                <Item>/ 10</Item>
                <Item>335 votes</Item>
            </Opinion>
            <Description>
                A young Chinese maiden disguises herself as a male warrior in order to save her father.
                Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
            </Description>
        </Content>
    </Tile>
);

export default MovieTile;