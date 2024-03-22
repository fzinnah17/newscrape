import numpy as np
import pandas as pd
# import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from transformers import DistilBertForSequenceClassification, DistilBertTokenizer
from torch.utils.data import DataLoader, Dataset
from datasets import load_dataset, concatenate_datasets

import torch
import matplotlib.pyplot as plt

#Step 1: Find the device. Check if CUDA ia available otherwise use CPU(My macbook m2 chip pro has CPU
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# print(f"Using device: {device}")

#Step 2: Pretrained model that we are using
pretrained_model = 'distilbert-base-uncased'

#Step 3: Load the datasets
left_dataset = load_dataset('happybusinessperson/leftarticles', split = "train")
right_dataset = load_dataset('happybusinessperson/rightarticles', split = "train")

#Step 4: Concatenate the datasets
merged_datasets = concatenate_datasets([left_dataset, right_dataset])


#Step 5: Add binary label column to the merged dataset
def add_label(data):
    if data["split"] == "left":
        return 0
    elif data["split"] == "right":
        return 1

#Step 6: Apply the add_label function to the merged dataset
merged_datasets = merged_datasets.map(add_label, batched = True)

# Print some examples from the merged dataset with labels (limited to 3)
# labeled_examples = merged_datasets[:3]

# print(f"Some examples from the merged dataset with labels:\n{pd.DataFrame(labeled_examples)}")

#Step 7: Train-test split the dataset
train_dataset = merged_datasets.train_test_split(test_size = 0.2, seed = 42)["train"]
test_dataset = merged_datasets.train_test_split(test_size = 0.2, seed = 42)["test"]

# print(f"train_dataset:\n{pd.DataFrame(train_dataset[:2])}")

# print(f"test_dataset:\n{pd.DataFrame(test_dataset[:2])}")